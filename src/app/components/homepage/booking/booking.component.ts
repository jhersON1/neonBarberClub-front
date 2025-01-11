import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
     class: "container mx-auto max-w-2xl"
  }
})
export class BookingComponent {

}
