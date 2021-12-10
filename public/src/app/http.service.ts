import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks() {
    return this._http.get('/tasks');
  }
  getId() {
    return this._http.get('/tasks/5c6b7587eaf87956f435fb55');
  }
}