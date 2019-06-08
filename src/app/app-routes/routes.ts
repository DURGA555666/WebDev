import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LocationComponent } from '../location/location.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'location', component: LocationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
