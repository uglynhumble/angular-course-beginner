import { Component } from '@angular/core';
import { SvgIconCmponent } from '../svg-icon/svg-icon.component';
import { SubCardComponent } from './subscriber-card/sub-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconCmponent, SubCardComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
