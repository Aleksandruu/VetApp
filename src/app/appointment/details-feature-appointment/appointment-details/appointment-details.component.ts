import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DoctorRestService,
  IAppointment,
  IDoctor,
  IPet,
} from '@appointment/data-access-appointment';
import { AppointmentRestService } from '@appointment/data-access-appointment/rest/appointment-rest.service';
import { PetRestService } from '@appointment/data-access-appointment/rest/pet-rest.service';
import { CustomDatePipe } from '../../../util/custom-date.pipe';
import { AppointmentCardComponent } from '@appointment/today-list-feature-appointment/appointment-list/appointment-card/appointment-card.component';
import { DoctorCardComponent } from '../../../ui/advertisment/doctor-card/doctor-card.component';

@Component({
  selector: 'vet-appointment-details',
  standalone: true,
  imports: [CustomDatePipe, AppointmentCardComponent, DoctorCardComponent],
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.scss',
})
export class AppointmentDetailsComponent {
  appointment!: IAppointment;
  doctor!: IDoctor;
  pet!: IPet;
  appointments!: IAppointment[];
  status = ['Created', 'In Progres', 'Closed'];

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentRestService,
    private doctorService: DoctorRestService,
    private petService: PetRestService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointmentService
      .getAppointment(Number(id))
      .subscribe((appointment) => {
        this.appointment = appointment;
        this.doctorService
          .getDoctor(appointment.doctorId)
          .subscribe((doctor) => {
            this.doctor = doctor;
          });
        this.petService.getPetByID(appointment.petId).subscribe((pet) => {
          this.pet = pet;
        });
        this.appointmentService
          .getAppointmentsByPetId(appointment.petId)
          .subscribe((appointments) => {
            this.appointments = appointments;
          });
      });
  }
}
