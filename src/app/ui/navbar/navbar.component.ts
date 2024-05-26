import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS } from '../../util/routes';

@Component({
  selector: 'vet-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private activeTab = 1;
  tabMap = new Map<number, boolean>();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tabMap.set(this.activeTab, true);
  }

  public selectTab(tid: number) {
    this.tabMap.set(this.activeTab, false);
    this.activeTab = tid;
    this.tabMap.set(this.activeTab, true);
  }

  navigateToMyAppointments(): void {
    this.router.navigate([PATHS.MY_APPOINTMENTS]);
    this.selectTab(1);
  }

  navigateToAllAppointments(): void {
    this.router.navigate([PATHS.ALL_APPOINTMENTS]);
    this.selectTab(2);
  }

  navigateToAddAppointment(): void {
    this.router.navigate([PATHS.ADD_APPOINTMENT]);
    this.selectTab(3);
  }
}
