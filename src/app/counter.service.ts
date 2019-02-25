import { Injectable } from '@angular/core';

export class CounterService {
  private _activationActions = 0;
  private _inactivationActions = 0;

  constructor() {
  }

  get activationActions() {
    return this._activationActions;
  }

  get inactivationActions() {
    return this._inactivationActions;
  }

  incrementActivationActions() {
    return ++this._activationActions;
  }

  incrementInactivationActions() {
    return ++this._inactivationActions;
  }
}
