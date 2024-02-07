import { Component, Input, ElementRef, OnInit, Inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input() modalID ='';
  constructor(@Inject(DOCUMENT) private document: Document, public modal:ModalService, public elf: ElementRef ){
  }

  ngOnInit(): void {
    if(this.document){
    document.body.appendChild(this.elf.nativeElement);
    }
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }
  
} 
