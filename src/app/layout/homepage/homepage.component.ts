import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "@shared/navbar/navbar.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {

}
