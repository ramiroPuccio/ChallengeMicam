import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Respuesta } from '../respuesta';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-credencial',
  templateUrl: 'credencial.page.html',
  styleUrls: ['credencial.page.scss']
})
export class CredencialPage {
  dni: string = '';
  solicitud: boolean = false;
  respuesta:Respuesta | null = null;
  nombre:string ='';
  edad:number = 0;
  estado:string ='';
  numeroCredencial:string='';
  documento:number=0;
  plan:string='';
  respondio: boolean =  false;
  message : string ='';
  hayError : boolean = false;
  constructor(private apiService: ApiService, private alertController: AlertController) {}

  makeApiRequest() {
    if(this.dni){
      this.solicitud = true
      this.apiService.sendRequest(this.dni).subscribe(
        (response) => {
          console.log('API Response:', response);
          this.respuesta = response;
          if (this.respuesta.status == "OK"){
            this.nombre =  this.respuesta.data.nombre;
            this.edad =  this.respuesta.data.edad;
            this.estado =  this.respuesta.data.estado;
            this.plan =  this.respuesta.data.plan;
            this.numeroCredencial = this.respuesta.data.nro_credencial
            this.documento = this.respuesta.data.nro_documento
            if (this.estado == "Inactivo"){
              this.createAlert('Socio inactivo')
            }
            this.respondio = true;
            this.hayError = false;
          } else if (this.respuesta.status == "NOK"){
            this.createAlert(response.data.mensaje);
            this.hayError = true;
          }
          },
        (error) => {
          this.respondio = true;
          this.hayError = true;
          this.createAlert(error);
          console.error('API Error:', error);
        }
      );
    } else {
      console.log("dni vacio");
    }
  }
  resetCredencial(){
    this.solicitud = false;
    this.respondio = false;
    this.respuesta = null;
    this.hayError = false;
    this.message='';
  };
  async createAlert(message:string) {
    console.log(message);
    const alert = await this.alertController.create({
      header: 'Atencion',
      message: message,
      buttons: ['OK'],
      htmlAttributes: {
        'aria-label': 'alert dialog',
      },
    });
    await alert.present();
  }
}
