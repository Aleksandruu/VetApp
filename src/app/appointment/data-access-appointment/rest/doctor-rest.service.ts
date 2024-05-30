import { Injectable } from '@angular/core';
import { DOCTORS } from '../data/doctor.data';
import { Observable, of } from 'rxjs';
import { IDoctor } from '../models/doctor.model';
@Injectable({
  providedIn: 'root',
})
export class DoctorRestService {
  constructor() {}

  getDoctors(): Observable<IDoctor[]> {
    return of(DOCTORS);
  }

  getDoctor(id: number): Observable<IDoctor> {
    return of(DOCTORS[id - 1]);
  }
}
