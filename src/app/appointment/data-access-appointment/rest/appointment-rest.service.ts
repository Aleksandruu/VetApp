import { Injectable } from '@angular/core';
import { APPOINTMENTS } from '../data/appointment.data';
import { Observable, of } from 'rxjs';
import { IAppointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentRestService {
  constructor() {}

  postAppointment(appointment: IAppointment): void {
    APPOINTMENTS.push(appointment);
  }

  getAppointments(page = 0): Observable<IAppointment[]> {
    const appointments: IAppointment[] = APPOINTMENTS.slice(
      page * 15,
      (page + 1) * 15
    );
    return of(appointments);
  }

  getPages(): Observable<number> {
    return of(Math.ceil(APPOINTMENTS.length / 15));
  }

  getTodaysAppointments(): Observable<IAppointment[]> {
    const todaysAppointments: IAppointment[] = APPOINTMENTS.filter(
      (appointment) => {
        const today = new Date();
        return (
          appointment.date.getDate() === today.getDate() &&
          appointment.date.getMonth() === today.getMonth() &&
          appointment.date.getFullYear() === today.getFullYear()
        );
      }
    );
    return of(todaysAppointments);
  }

  getAppointmentsByPetId(id: number): Observable<IAppointment[]> {
    const appointments: IAppointment[] = APPOINTMENTS.filter((appointment) => {
      return appointment.petId === id;
    });
    return of(appointments);
  }

  getAppointment(id: number): Observable<IAppointment> {
    const appointment = APPOINTMENTS.find(
      (appointment) => appointment.id === id
    );
    return of(appointment!);
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
