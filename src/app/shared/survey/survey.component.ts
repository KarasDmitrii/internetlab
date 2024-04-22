import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";


@Component({
  selector: 'il-survey',
  standalone: true,
  templateUrl: './survey.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './survey.component.scss'
})

export class SurveyComponent {

  @Input() items: {
    heading: string;
    content: string;
  }[];
}
