import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms'
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailComponent } from './component/detail/detail.component';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EventComponent } from './component/event/event.component';
import { ViewComponent } from './component/view/view.component';
import { DisplaypageComponent } from './component/displaypage/displaypage.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DetailComponent,
    BookingformComponent,
    NavbarComponent,
    EventComponent,
    ViewComponent,
    DisplaypageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
