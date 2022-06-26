import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { tap } from 'rxjs';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {

  private count = 0;

  message = '';

  @ViewChild('modal') modal!: ElementRef;

  constructor(
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.errorSubject
    .pipe(
      tap(() => {
        setTimeout(() => {
          this.count = 0;
        }, 500)
      })
    )
    .subscribe((value: string) => {
      this.count++;

      if(this.count < 2) {
        this.message = value;
        this.openModal();
      }
    })
  }

  openModal(): void {
    new Modal(this.modal.nativeElement).show();
  }

}
