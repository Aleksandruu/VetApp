import { Component, Input } from '@angular/core';
import { IDoctor } from '../../doctor.model';

@Component({
  selector: 'vet-doctor-card',
  standalone: true,
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss',
})
export class DoctorCardComponent {
  @Input() doctor!: IDoctor;
}
