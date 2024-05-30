import { Component } from '@angular/core';
import { AdCardComponent } from './ad-card/ad-card.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import {
  DOCTORS,
  DoctorRestService,
  IDoctor,
} from '@appointment/data-access-appointment';
import { IAd } from './ad.model';

@Component({
  selector: 'vet-advertisment',
  standalone: true,
  imports: [AdCardComponent, DoctorCardComponent],
  templateUrl: './advertisment.component.html',
  styleUrl: './advertisment.component.scss',
})
export class AdvertismentComponent {
  doctors!: IDoctor[];

  ads: IAd[] = [
    {
      title: 'Find and join in special events for your pets',
      photoUrl: '../../../assets/ads/ad-0.jpg',
    },
    {
      title: 'Connect and share with communities',
      photoUrl: '../../../assets/ads/ad-1.jpg',
    },
  ];

  constructor(private doctorService: DoctorRestService) {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }
}
