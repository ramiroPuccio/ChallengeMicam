import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FotosService } from '../services/fotos.service';
@Component({
  selector: 'app-foto',
  templateUrl: 'foto.page.html',
  styleUrls: ['foto.page.scss']
})
export class FotoPage {

 

  constructor(public fotosService: FotosService) { }

  ngOnInit() {
  }
  addPhotoToGallery(from:string) {
    this.fotosService.addNewToGallery(from);
  }

}
