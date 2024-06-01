import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DoctorRestService,
  IAppointment,
  IDoctor,
  IPet,
} from '@appointment/data-access-appointment';
import { Status } from '@appointment/data-access-appointment/models/status.model';
import { AppointmentRestService } from '@appointment/data-access-appointment/rest/appointment-rest.service';
import { PetRestService } from '@appointment/data-access-appointment/rest/pet-rest.service';
import { CustomHourPipe } from '../../../util/custom-hour.pipe';
import { PATHS } from '../../../util/routes';
import { futureDateValidator } from '../../../util/future-date.validator';

@Component({
  selector: 'vet-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CustomHourPipe],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss',
})
export class AppointmentFormComponent {
  appointment: IAppointment = {
    id: 0,
    petId: 0,
    date: new Date(),
    hour: 0,
    doctorId: 0,
    status: Status.created,
  };
  appointmentForm!: FormGroup;
  petForm!: FormGroup;
  doctors!: IDoctor[];
  pets!: IPet[];
  selectedPetId = 1;
  hours: number[] = [];
  showPetForm = false;

  constructor(
    private appointmentService: AppointmentRestService,
    private doctorService: DoctorRestService,
    private petService: PetRestService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getAppointment();
    this.getDoctors();
    this.getPets();
    this.initHoursArray();
  }

  ngOnInit(): void {
    this.initForms();
  }

  getAppointment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.appointmentService
        .getAppointment(Number(id))
        .subscribe((appointment) => {
          this.appointment = appointment;
          this.selectedPetId = appointment.petId;
        });
    }
  }

  getDoctors(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  getPets(): void {
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }

  initForms(): void {
    this.appointmentForm = new FormGroup({
      doctorId: new FormControl(this.appointment.doctorId, [Validators.min(1)]),
      date: new FormControl(this.appointment.date.toISOString().split('T')[0], [
        Validators.required,
        futureDateValidator(),
      ]),
      hour: new FormControl(this.appointment.hour, [Validators.min(9)]),
    });
    this.petForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      type: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }
  initHoursArray(): void {
    for (let i = 9; i < 17; i++) {
      this.hours.push(i);
      this.hours.push(i + 0.3);
    }
  }

  openAddPet(): void {
    this.showPetForm = true;
  }

  selectPet(id: number): void {
    this.selectedPetId = id;
  }

  savePet(): void {
    if (this.petForm.valid) {
      const pet: IPet = {
        id: 0,
        ...this.petForm.value,
      };
      this.petService.addPet(pet).subscribe();
      this.showPetForm = false;
    }
  }

  saveAppointment(): void {
    if (this.appointmentForm.valid) {
      const appointment: IAppointment = {
        id: 0,
        petId: this.selectedPetId,
        date: new Date(this.appointmentForm.value.date),
        hour: this.appointmentForm.value.hour,
        doctorId: this.appointmentForm.value.doctorId,
        status: Status.created,
      };
      if (appointment.id === 0) {
        this.appointmentService.postAppointment(appointment).subscribe();
      } else {
        this.appointmentService.putAppointment(appointment).subscribe();
      }
      this.router.navigate([PATHS.MY_APPOINTMENTS]);
    }
  }
}
