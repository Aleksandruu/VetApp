import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { IDoctor } from '@appointment/data-access-appointment';

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
