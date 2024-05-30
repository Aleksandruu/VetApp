import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { AdvertismentComponent } from './ui/advertisment/advertisment.component';
import { IDoctor } from '@appointment/data-access-appointment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNavComponent,
    TopNavComponent,
    AdvertismentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'VetApp';
  doctor: IDoctor = {
    id: 0,
    name: 'Dr. Emily Smith',
    photoUrl: '../../../assets/doctors/doctor-0.jpg',
    type: 'Veterinary Cardiologist',
    rating: 4.8,
  };
}
