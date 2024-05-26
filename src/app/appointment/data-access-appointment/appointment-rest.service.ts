import { Injectable } from '@angular/core';
import { IAppointment } from './appointment.model';
import { APPOINTMENTS } from './appointment.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentRestService {
  constructor() {}

  postAppointment(appointment: IAppointment): void {
    APPOINTMENTS.push(appointment);
  }

  getAppointments(): Observable<IAppointment[]> {
    return of(APPOINTMENTS);
  }

  getAppointment(id: number): Observable<IAppointment> {
    return of(APPOINTMENTS[id]);
  }

  putAppointment(appointment: IAppointment): void {
    const id: number = appointment.id;
    APPOINTMENTS[id] = appointment;
  }

  deleteAppointment(id: number): void {
    const index = APPOINTMENTS.findIndex(
      (appointment) => appointment.id === id
    );
    APPOINTMENTS.splice(index, 1);
  }
}
