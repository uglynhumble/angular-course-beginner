import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';

export const routes: Routes = [
    {path: '', component:LayoutComponent, children: [
        {path: '', component:SearchPageComponent},
        {path: 'profile', component:ProfilePageComponent}
    ]},
    {path: 'login', component:AuthComponent}
];
