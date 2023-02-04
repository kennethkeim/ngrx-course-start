import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../shared/action-types";
import { compareCourses, Course } from "./course";

export interface CoursesState extends EntityState<Course> {}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,

  on(CourseActions.allCoursesLoaded, (state, action) =>
    adapter.addMany(action.courses, state)
  )
);

export const { selectAll } = adapter.getSelectors();
