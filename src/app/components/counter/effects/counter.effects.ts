import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs";
import { Action, createAction, props } from "@ngrx/store";

// defining action
export const logAction = createAction(
    '[Logger functionality] logs inputs',
    props<{payload: any}>(),
)

@Injectable ()
export class LoggerEffects {

    logger$ = createEffect(() => this.actions$.pipe(
        ofType('[Logger functionality] logs inputs'),
        tap((action: {payload:any}) => console.log('logging action payload:', action.payload))
    ), { dispatch: false})

    constructor (
        private actions$: Actions,
    ) {}
}