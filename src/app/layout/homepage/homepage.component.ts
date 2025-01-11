import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "@shared/navbar/navbar.component";
import { BookingComponent } from '@app/components/homepage/booking/booking.component';
import { HeroVideoComponent } from '@app/components/homepage/hero-video/hero-video.component';
import { LocationComponent } from '@app/components/homepage/location/location.component';
import { FooterComponent } from '@app/shared/footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [
    NavbarComponent,
    HeroVideoComponent,
    BookingComponent,
    LocationComponent,
    FooterComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {

}
