import { HttpClient } from '@angular/common/http';

/**
 *  For CRUD implementation
 *
 * This abstract class has default method for crud actions
 *
 */
export abstract class AbstractService {

  protected resources = '';

  protected apiRoot = '';

  constructor (private _http: HttpClient) { }

}
