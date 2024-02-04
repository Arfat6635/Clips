import { Injectable } from '@angular/core';


interface IModal{
  id: string;
  visible:boolean;
}


@Injectable({
  providedIn: 'root',
})

export class ModalService {
  private modals:IModal[]=[];
  private visible = false;
  constructor() {}

  register(id:string){
    this.modals.push(
      {
      id,
      visible:false
      }
      )
  }


  unregister(id:string){
      this.modals=this.modals.filter(
        elements=>elements.id !== id 
      )
  }

  isModalOpen(id:string){
    return !!this.modals.find(element => element.id == id)?.visible //finds the id specified to modal
  }

  toggleModal(id:String){
    let modal = this.modals.find(element => element.id==id)
    if(modal){
      modal.visible = !modal.visible
    }
  }

  

}
