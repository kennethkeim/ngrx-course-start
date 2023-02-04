import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureKey } from "./config";

import * as fromCourses from "../model/course.reducers";
import { Course } from "../model/course";

export const selectCoursesState =
  createFeatureSelector<fromCourses.CoursesState>(coursesFeatureKey);

export const selectAllCourses = createSelector(
  selectCoursesState,
  // #courses-selector-hotfix
  (data): Course[] => {
    const realData = data["0"] as fromCourses.CoursesState;
    return Object.keys(realData.entities).map((key) => realData.entities[key]);
  }
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category == "BEGINNER")
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category == "ADVANCED")
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  // #courses-selector-hotfix
  (state) => {
    const realState = state["0"] as fromCourses.CoursesState;
    return realState.allCoursesLoaded;
  }
);
