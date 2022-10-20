import { Injectable } from '@angular/core';
import { Event } from "../model/event"

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    let events: Event[] = [
      {name:"Lucca", date:"2023-03-10", time:"12:00", location: { address: "Church", city: "Lucca", country: "Italy"}},
      {name:"QuakeCon", date:"2023-08-21", time:"8:00", location: { address: "Gayloard", city: "Texas", country: "USA"}},
      {name:"KuachiCon", date:"2023-09-28", time:"03:00", location: { address: "GamingSphere", city: "Melbourne", country: "Australia"}}
    ];

    return events;
  }
}
