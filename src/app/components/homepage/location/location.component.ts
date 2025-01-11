import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'container mx-auto max-w-6xl'
  }
})
export class LocationComponent {

}
