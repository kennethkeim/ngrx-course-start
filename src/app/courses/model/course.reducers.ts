import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../shared/action-types";
import { compareCourses, Course } from "./course";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false,
});

export const coursesReducer = createReducer(
  initialCoursesState,

  on(CourseActions.allCoursesLoaded, (state, action) =>
    adapter.addMany(action.courses, { ...state, allCoursesLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
