import { AuthContext, LoginResponse, LoginRequest} from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authContext!: AuthContext;
  private _apiRoot = environment.apiRoot;

  constructor (
    private _http: HttpClient
  ) { }

  login (body: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${this._apiRoot}/account/login`, body);
  }

  logout () {
    // Not implemented
  }

  forgetPassword () {
    // Not implemented
  }

  resetPassword () {
    // Not implemented
  }

  private _loadAuthContext () {
    // Not implemented
  }
}
