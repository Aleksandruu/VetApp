import { Component, Input } from '@angular/core';
import { IAd } from '../ad.model';

@Component({
  selector: 'vet-ad-card',
  standalone: true,
  imports: [],
  templateUrl: './ad-card.component.html',
  styleUrl: './ad-card.component.scss',
})
export class AdCardComponent {
  @Input() ad!: IAd;
}
