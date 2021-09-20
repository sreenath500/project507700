import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb = (): any => {
    let appointments = [
      {id: 1, email: "raj@revalsys.com", mobile: "8585747496",name: "Raj",designation: "CEO",salary: "10,000",qualification: "MBA", manager: "No reporting Employee"},
      {id: 2, email: "Divya@revalsys.com", mobile: "8585747496",name: "Divya",designation: "PM",salary: "2,000",qualification: "McA", manager: "Raj"},
      {id: 3, email: "Jag@revalsys.com", mobile: "8585747496",name: "Jag",designation: "Team Leader",salary: "30,000",qualification: "BBA", manager: "Divya"},
    ]
    return {
      appointments: appointments
    };
  }

}
