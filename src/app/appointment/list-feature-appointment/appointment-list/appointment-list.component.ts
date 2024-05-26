import { Component } from '@angular/core';
import { AppointmentRestService } from '@appointment/data-access-appointment/appointment-rest.service';
import { IAppointment } from '@appointment/data-access-appointment/appointment.model';

@Component({
  selector: 'vet-appointment-list',
  standalone: true,
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  appointments!: IAppointment[];

  createdAppointments!: IAppointment[];
  inProgressAppointments!: IAppointment[];
  closedAppointments!: IAppointment[];

  constructor(private appointentService: AppointmentRestService) {
    this.appointentService
      .getAppointments()
      .subscribe((appointments) => (this.appointments = appointments));
  }
}
