import { Component } from '@angular/core';
import { IlHeaderComponent } from "../shared/header/header.component";
import {HowItListComponent} from "../shared/how-it-list/howItList.component";
import {StatisticComponent} from "../shared/statistic/statistic.component";


@Component({
  selector: 'il-home',
  standalone: true,
  imports: [
    IlHeaderComponent,
    HowItListComponent,
    StatisticComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class IlHomeComponent { }
