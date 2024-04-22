import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import {AccordionItemComponent} from "./accordion-item/accordion-item.component";


@Component({
  selector: 'il-accordion',
  templateUrl: "accordion.component.html",
  styleUrl: "accordion.component.scss",
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AccordionItemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {

  @Input() heading: string;
  @Input() items: {
    heading: string;
    content: string;
  }[];

}
