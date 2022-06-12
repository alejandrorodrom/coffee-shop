import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {

  message = '';

  @ViewChild('modal') modal!: ElementRef;

  constructor(
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.errorSubject.subscribe((value: string) => {
      this.message = value;
      this.openModal();
    })
  }

  openModal(): void {
    new Modal(this.modal.nativeElement).show();
  }

}
