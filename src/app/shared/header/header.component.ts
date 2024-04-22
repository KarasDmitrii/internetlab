import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'il-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class IlHeaderComponent {
  @HostBinding('class') private class: string = `position-absolute w-100`;
}
