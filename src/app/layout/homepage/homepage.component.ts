import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "@shared/navbar/navbar.component";
import { HeroVideoComponent } from "../../components/homepage/hero-video/hero-video.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, HeroVideoComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {

}
