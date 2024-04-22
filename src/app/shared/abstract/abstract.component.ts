import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';


@Component({ template: '' })
export abstract class AbstractComponent implements OnDestroy {

  protected destroyed$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
