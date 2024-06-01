import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { PATHS } from '../../../util/routes';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'vet-appointment-details',
  standalone: true,
  imports: [
    CustomDatePipe,
    AppointmentCardComponent,
    DoctorCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.scss',
})
export class AppointmentDetailsComponent {
  appointment!: IAppointment;
  doctor!: IDoctor;
  pet!: IPet;
  appointments!: IAppointment[];
  status = ['Created', 'In Progres', 'Closed'];
  showDiagnosisInput = false;
  diagnosisForm!: FormGroup;
  diagnosisControl!: FormControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
        this.diagnosisControl = new FormControl(this.appointment.diagnosis, [
          Validators.minLength(3),
        ]);
        this.diagnosisForm = new FormGroup({
          diagnosisControl: this.diagnosisControl,
        });
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

  setDiagnosis(): void {
    if (this.showDiagnosisInput) {
      this.appointmentService
        .setDiagnosis(this.appointment.id, this.diagnosisControl.value)
        .subscribe();
      this.showDiagnosisInput = false;
    } else {
      this.showDiagnosisInput = true;
    }
  }

  toggleDiagnosis(): void {
    this.showDiagnosisInput = !this.showDiagnosisInput;
  }

  startAppointment(): void {
    this.appointmentService.startAppointment(this.appointment.id).subscribe();
    console.log(this.appointment);
  }

  navigateToEdit(): void {
    this.router.navigate([
      PATHS.EDIT_APPOINTMENTS,
      this.appointment.id.toString(),
    ]);
  }
}
