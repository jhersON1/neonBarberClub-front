import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
     class: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
  }
})
export class BookingComponent {

}
