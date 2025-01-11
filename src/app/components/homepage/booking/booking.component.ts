import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
     class: "py-24 px-6"
  }
})
export class BookingComponent {

}
