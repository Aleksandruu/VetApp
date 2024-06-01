import { Component } from '@angular/core';
import { AppointmentRowComponent } from './appointment-row/appointment-row.component';
import {
  DoctorRestService,
  IAppointment,
  IDoctor,
  IPet,
} from '@appointment/data-access-appointment';
import { AppointmentRestService } from '@appointment/data-access-appointment/rest/appointment-rest.service';
import { PetRestService } from '@appointment/data-access-appointment/rest/pet-rest.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFilter } from './filters.model';
import { filter } from 'rxjs';

@Component({
  selector: 'vet-appointment-table',
  standalone: true,
  imports: [AppointmentRowComponent, ReactiveFormsModule],
  templateUrl: './appointment-table.component.html',
  styleUrl: './appointment-table.component.scss',
})
export class AppointmentTableComponent {
  appointments: IAppointment[] = [];
  pets: IPet[] = [];
  doctors: IDoctor[] = [];
  selectedPage = 0;
  pages: number[] = [];
  filterForm!: FormGroup;
  filters: IFilter = {
    petId: 0,
    doctorId: 0,
    date: null,
    status: -1,
  };

  constructor(
    private appointmentService: AppointmentRestService,
    private petService: PetRestService,
    private doctorService: DoctorRestService
  ) {
    this.getPages();
    this.getAppointments(this.selectedPage, this.filters);
    this.getDoctors();
    this.getPets();
    this.filterForm = new FormGroup({
      petId: new FormControl(this.filters.petId),
      doctorId: new FormControl(this.filters.doctorId),
      date: new FormControl(this.filters.date),
      status: new FormControl(this.filters.status),
    });
  }

  selectPage(page: number) {
    this.selectedPage = page;
    this.getAppointments(page, this.filters);
  }

  getPages(): void {
    this.appointmentService.getPages().subscribe((x) => {
      for (let i = 0; i < x; i++) {
        this.pages[i] = i;
      }
    });
  }

  getAppointments(page: number, filter: IFilter): void {
    this.appointmentService
      .getAppointments(page, filter)
      .subscribe((appointments) => {
        this.appointments = appointments;
      });
  }

  filterResults(): void {
    this.filters = this.filterForm.value;
    this.getAppointments(this.selectedPage, this.filters);
  }

  getDoctors(): void {
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }

  getPets(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }
}
