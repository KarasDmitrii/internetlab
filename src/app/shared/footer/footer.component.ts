import { Component } from '@angular/core';


@Component({
  selector: 'il-footer',
  standalone: true,
  template: `
    <footer class="footer__section section d-grid align-items-center">
      <p class="footer__body body text-center">© 2021 Лаборатория интернет</p>
    </footer>
  `,
  styles: `
    .footer {
      &__section {
        height: 88px;
        border-top: 1px solid #ECEFF2
      }

      &__body {
        font-size: 18px;
        line-height: 32px;
      }
    }
  `
})
export class FooterComponent { }
