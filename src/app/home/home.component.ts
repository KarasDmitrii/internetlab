import { Component } from '@angular/core';
import { IlHeaderComponent } from "../shared/header/header.component";
import { HowItListComponent } from "../shared/how-it-list/howItList.component";
import { StatisticComponent } from "../shared/statistic/statistic.component";
import { AccordionComponent } from "../shared/accordion/accordion.component";


@Component({
  selector: 'il-home',
  standalone: true,
  imports: [
    IlHeaderComponent,
    HowItListComponent,
    StatisticComponent,
    AccordionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class IlHomeComponent {

  protected accordion = {
    heading: 'Вопросы и ответы',
    items: [{
      heading: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
      content: `И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?`
    }, {
      heading: 'Прототип нового сервиса - это как трубный призыв?',
      content: `И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?`
    }, {
      heading: 'Частокол на границе продолжает удивлять?',
      content: `И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?`
    }, {
      heading: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
      content: `И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?`
    }, {
      heading: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
      content: `И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?`
    }, {
      heading: 'Высококачественный прототип будущего проекта обнадёживает?',
      content: `И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?`
    }]
  }
}
