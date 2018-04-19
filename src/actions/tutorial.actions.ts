import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'

// The actions in these classes typically are created to persist in a database
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL

  // constructor is only necessary when passing in a type of data
  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL

  // number is the index of the tutorial to be removed
  constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial
