import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { NgIf } from "@angular/common";
import { fromEvent, startWith, takeUntil, tap } from "rxjs";
import { AbstractComponent } from "../../abstract";


@Component({
  selector: 'il-accordion-item',
  templateUrl: "accordion-item.component.html",
  styleUrl: "accordion-item.component.scss",
  standalone: true,
  imports: [ NgIf ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccordionItemComponent extends AbstractComponent implements AfterViewInit {

  @ViewChild('contentRef') private _content: ElementRef<HTMLDivElement>;
  get contentElement(): HTMLDivElement {
    return this._content.nativeElement;
  }

  @Input() heading: string;
  @Input() content: string;

  protected isOpen: boolean = false;
  protected height: string = '0px';
  protected maxHeight: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    super()
  }

  protected ToggleContent(): void {
    this.isOpen = !this.isOpen;
    this.height = this.isOpen ? this.maxHeight : '0px';
  }

  ngAfterViewInit(): void {
    fromEvent(window, 'resize').pipe(
      startWith(null),
      tap(() => {
        this.maxHeight = `${this.contentElement.offsetHeight}px`;
        this.changeDetectorRef.markForCheck();
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }
}
