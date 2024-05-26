import { Component } from '@angular/core';
import { AdCardComponent } from './ad-card/ad-card.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { IDoctor } from '../doctor.model';
import { IAd } from './ad.model';

@Component({
  selector: 'vet-advertisment',
  standalone: true,
  imports: [AdCardComponent, DoctorCardComponent],
  templateUrl: './advertisment.component.html',
  styleUrl: './advertisment.component.scss',
})
export class AdvertismentComponent {
  doctors: IDoctor[] = [
    {
      name: 'Dr. John Doe',
      photoUrl: '../../../assets/doctors/doctor-1.jpg',
      type: 'Veterinary Dermatologist',
      rating: 4.5,
    },
    {
      name: 'Dr. Sarah Johnson',
      photoUrl: '../../../assets/doctors/doctor-2.jpg',
      type: 'Veterinary Neurologist',
      rating: 4.9,
    },
    {
      name: 'Dr. Michael Brown',
      photoUrl: '../../../assets/doctors/doctor-3.jpg',
      type: 'Veterinary Surgeon',
      rating: 4.7,
    },
  ];

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
}
