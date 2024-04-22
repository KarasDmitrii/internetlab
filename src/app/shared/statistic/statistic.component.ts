import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'il-statistic',
  standalone: true,
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StatisticComponent { }
