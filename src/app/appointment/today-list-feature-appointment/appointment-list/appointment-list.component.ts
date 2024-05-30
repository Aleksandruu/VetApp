import { Component } from '@angular/core';
import { Status } from '@appointment/data-access-appointment/models/status.model';
import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IAppointment } from '@appointment/data-access-appointment';
import { AppointmentRestService } from '@appointment/data-access-appointment/rest/appointment-rest.service';

@Component({
  selector: 'vet-appointment-list',
  standalone: true,
  imports: [AppointmentCardComponent, DragDropModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  appointments: IAppointment[] = [];

  dragCreatedAppointments: string[] = [];
  dragInProgressAppointments: string[] = [];
  dragClosedAppointments: string[] = [];

  createdAppointments: IAppointment[] = [];
  inProgressAppointments: IAppointment[] = [];
  closedAppointments: IAppointment[] = [];

  constructor(private appointentService: AppointmentRestService) {
    this.appointentService.getTodaysAppointments().subscribe((appointments) => {
      this.appointments = appointments;
      this.splitByStatus();
      this.synchronizeArrays();
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.synchronizeArrays();
  }

  splitByStatus(): void {
    for (let appointment of this.appointments) {
      if (appointment.status === Status.created) {
        this.dragCreatedAppointments.push(appointment.id.toString());
        continue;
      }
      if (appointment.status === Status.inProgress) {
        this.dragInProgressAppointments.push(appointment.id.toString());
        continue;
      }
      if (appointment.status === Status.closed) {
        this.dragClosedAppointments.push(appointment.id.toString());
      }
    }
  }

  synchronizeArrays(): void {
    this.createdAppointments = this.dragCreatedAppointments
      .map((id) =>
        this.appointments.find(
          (appointment) => appointment.id.toString() === id
        )
      )
      .filter((appointment) => appointment)
      .map((appointment) => {
        appointment!.status = Status.created;
        return appointment!;
      });

    this.inProgressAppointments = this.dragInProgressAppointments
      .map((id) =>
        this.appointments.find(
          (appointment) => appointment.id.toString() === id
        )
      )
      .filter((appointment) => appointment)
      .map((appointment) => {
        appointment!.status = Status.inProgress;
        return appointment!;
      });

    this.closedAppointments = this.dragClosedAppointments
      .map((id) =>
        this.appointments.find(
          (appointment) => appointment.id.toString() === id
        )
      )
      .filter((appointment) => appointment)
      .map((appointment) => {
        appointment!.status = Status.closed;
        return appointment!;
      });
  }
}
