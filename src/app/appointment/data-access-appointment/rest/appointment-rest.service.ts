import { Injectable } from '@angular/core';
import { APPOINTMENTS } from '../data/appointment.data';
import { Observable, filter, of } from 'rxjs';
import { IAppointment } from '../models/appointment.model';
import { Status } from '../models/status.model';
import { IFilter } from '@appointment/all-list-feature-appointment/appointment-table/filters.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentRestService {
  constructor() {}

  postAppointment(appointment: IAppointment): Observable<null> {
    let newAppointment = appointment;
    newAppointment.id = APPOINTMENTS[APPOINTMENTS.length - 1].id + 1;
    APPOINTMENTS.push(appointment);
    return of(null);
  }

  getAppointments(page = 0, filter: IFilter): Observable<IAppointment[]> {
    let filteredAppointments = APPOINTMENTS;

    if (filter.petId !== 0) {
      filteredAppointments = filteredAppointments.filter(
        (appointment) => appointment.petId == filter.petId
      );
    }

    if (filter.doctorId !== 0) {
      filteredAppointments = filteredAppointments.filter((appointment) => {
        return appointment.doctorId == filter.doctorId;
      });
    }

    if (filter.status !== -1) {
      filteredAppointments = filteredAppointments.filter(
        (appointment) => appointment.status == filter.status
      );
    }

    if (filter.date !== null) {
      filteredAppointments = filteredAppointments.filter((appointment) => {
        const date = new Date(filter.date!);
        return (
          appointment.date.getDate() === date.getDate() &&
          appointment.date.getMonth() === date.getMonth() &&
          appointment.date.getFullYear() === date.getFullYear()
        );
      });
    }

    const appointments: IAppointment[] = filteredAppointments.slice(
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
    const appointment = APPOINTMENTS.find((appointment) => {
      return appointment.id === id;
    });
    return of(appointment!);
  }

  putAppointment(appointment: IAppointment): Observable<null> {
    const id: number = appointment.id;
    const index = APPOINTMENTS.findIndex(
      (appointment) => appointment.id === id
    );
    APPOINTMENTS[index] = appointment;
    return of(null);
  }

  setDiagnosis(id: number, diagnosis: string): Observable<null> {
    const index = APPOINTMENTS.findIndex(
      (appointment) => appointment.id === id
    );
    APPOINTMENTS[index].diagnosis = diagnosis;
    return of(null);
  }

  startAppointment(id: number): Observable<null> {
    const index = APPOINTMENTS.findIndex(
      (appointment) => appointment.id === id
    );
    APPOINTMENTS[index].status = Status.inProgress;
    return of(null);
  }
}
