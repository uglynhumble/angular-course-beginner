import { Component } from '@angular/core';
import { SidebarComponent } from '../../common-ui/sidebar/sidebar.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {}
