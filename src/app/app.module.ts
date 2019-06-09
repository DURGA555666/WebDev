import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog';

import { MatToolbarModule,MatListModule,MatInputModule,MatCardModule,MatButtonModule} from '@angular/material';
import 'hammerjs';
// components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
// services
import { DishService } from './services/dish.service';

// modules
import { AppRoutesModule } from './app-routes/app-routes.module';
import { ContactComponent } from './login/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBIirBdpTf3XHpWl4mfNux-NbQ7wORVLGw'
    }),
    AppRoutesModule,

   // HomeComponent,


  ],
  providers: [ DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
