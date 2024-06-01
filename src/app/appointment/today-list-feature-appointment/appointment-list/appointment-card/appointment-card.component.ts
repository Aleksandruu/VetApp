import { Component, Input } from '@angular/core';
import { Status } from '@appointment/data-access-appointment/models/status.model';
import { CustomDatePipe } from '../../../../util/custom-date.pipe';
import { Router } from '@angular/router';
import { PATHS } from '../../../../util/routes';
import {
  DoctorRestService,
  IAppointment,
} from '@appointment/data-access-appointment';
import { PetRestService } from '@appointment/data-access-appointment/rest/pet-rest.service';
import { CustomHourPipe } from '../../../../util/custom-hour.pipe';

@Component({
  selector: 'vet-appointment-card',
  standalone: true,
  imports: [CustomDatePipe, CustomHourPipe],
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.scss',
})
export class AppointmentCardComponent {
  @Input() appointment!: IAppointment;
  doctor: string = '';
  gripClass = '';
  pet = '';

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

    this.petService.getPetByID(this.appointment.petId).subscribe((pet) => {
      this.pet = pet.name;
    });

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
