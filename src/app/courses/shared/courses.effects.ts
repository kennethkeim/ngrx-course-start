import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "../services/courses-http.service";
import { allCoursesLoaded, loadAllCourses } from "./course.actions";

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadAllCourses),
      concatMap((action) => this.coursesHttpSvc.findAllCourses()),
      map((courses) => allCoursesLoaded({ courses }))
    )
  );

  constructor(
    private actions: Actions,
    private coursesHttpSvc: CoursesHttpService
  ) {}
}
