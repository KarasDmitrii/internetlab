import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";


@Component({
  selector: 'how-it-list',
  standalone: true,
  templateUrl: './howItList.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './howItList.component.scss'
})
export class HowItListComponent {
  protected items = [{
    icon: 'assets/icons/waiting.svg',
    heading: 'Прочитай задание внимательно',
    heading2: 'Думаю у тебя не займет это больше двух-трех минут'
  }, {
    icon: 'assets/icons/delivery-truck.svg',
    heading: 'Изучи весь макет заранее',
    heading2: 'Подумай как это будет работать на разных разрешениях и при скролле'
  }, {
    icon: 'assets/icons/secure.svg',
    heading: 'Сделай хорошо',
    heading2: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
  }, {
    icon: 'assets/icons/money-bags.svg',
    heading: 'Получи предложение',
    heading2: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
  }]
}
