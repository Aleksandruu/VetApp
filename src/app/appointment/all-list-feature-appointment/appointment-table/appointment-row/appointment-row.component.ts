import { Component, Input } from '@angular/core';
import { CustomDatePipe } from '../../../../util/custom-date.pipe';
import { Status } from '@appointment/data-access-appointment/models/status.model';
import { Router } from '@angular/router';
import { PATHS } from '../../../../util/routes';
import {
  DoctorRestService,
  IAppointment,
} from '@appointment/data-access-appointment';
import { PetRestService } from '@appointment/data-access-appointment/rest/pet-rest.service';

@Component({
  selector: 'vet-appointment-row',
  standalone: true,
  imports: [CustomDatePipe],
  templateUrl: './appointment-row.component.html',
  styleUrl: './appointment-row.component.scss',
})
export class AppointmentRowComponent {
  @Input() appointment!: IAppointment;
  gripClass = '';
  doctor: string = '';
  pet: string = '';

  constructor(
    private router: Router,
    private doctorService: DoctorRestService,
    private petService: PetRestService
  ) {}

  ngOnInit(): void {
    this.doctorService
      .getDoctor(this.appointment.doctorId)
      .subscribe((doctor) => {
        this.doctor = doctor.name;
      });

    this.petService
      .getPetByID(this.appointment.petId)
      .subscribe((pet) => (this.pet = pet.name));

    if (this.appointment.status === Status.created) {
      this.gripClass = 'grip created';
    }
    if (this.appointment.status === Status.inProgress) {
      this.gripClass = 'grip inProgress';
    }
    if (this.appointment.status === Status.closed) {
      this.gripClass = 'grip closed';
    }
  }

  navigateToAppointmentDetails(): void {
    this.router.navigate([PATHS.APPOINTMENT_DETAILS + this.appointment.id]);
  }
}
