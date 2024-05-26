import { Component, Input } from '@angular/core';
import { IDoctor } from '../doctor.model';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'vet-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
  imports: [NavbarComponent],
})
export class TopNavComponent {
  @Input() profile!: IDoctor;
}
