import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input() modalID ='';
  constructor(public modal:ModalService, public elf: ElementRef ){
  }

  ngOnInit(): void {
    document.body.appendChild(this.elf.nativeElement);
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }
  
} 
