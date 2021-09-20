import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  SERVER_URL: string = 'http://localhost:8080/api/';

  constructor(public http: HttpClient) {
  }

  getSpeciality() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  createBlogs = (data: any): any => {
    return this.http.post<Config>(`${this.SERVER_URL}appointments`, data);
  };

  updateAppointment(data: any, id: any) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data);
  }

  deleteFav(id: any) {
    return this.http.delete<Config>(`${this.SERVER_URL + 'appointments'}/${id}`);
  }
}
