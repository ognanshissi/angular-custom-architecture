import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 *  For CRUD implementation
 *
 * This abstract class has default method for crud actions
 *
 */
export abstract class abstractService {

  protected resources = '';
  protected apiRoot = '';

  constructor(private _http: HttpClient) { }

}
