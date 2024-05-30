import { Component } from '@angular/core';
import { AppointmentRowComponent } from './appointment-row/appointment-row.component';
import { IAppointment } from '@appointment/data-access-appointment';
import { AppointmentRestService } from '@appointment/data-access-appointment/rest/appointment-rest.service';

@Component({
  selector: 'vet-appointment-table',
  standalone: true,
  imports: [AppointmentRowComponent],
  templateUrl: './appointment-table.component.html',
  styleUrl: './appointment-table.component.scss',
})
export class AppointmentTableComponent {
  appointments: IAppointment[] = [];
  selectedPage = 0;
  pages: number[] = [];

  constructor(private appointmentService: AppointmentRestService) {
    this.getPages();
    this.getAppointments(this.selectedPage);
  }

  selectPage(page: number) {
    this.selectedPage = page;
    this.getAppointments(page);
  }

  getPages(): void {
    this.appointmentService.getPages().subscribe((x) => {
      for (let i = 0; i < x; i++) {
        this.pages[i] = i;
      }
    });
  }

  getAppointments(page: number): void {
    this.appointmentService.getAppointments(page).subscribe((appointments) => {
      this.appointments = appointments;
    });
  }
}
