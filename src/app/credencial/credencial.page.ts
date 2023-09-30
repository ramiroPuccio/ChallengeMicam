import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-credencial',
  templateUrl: 'credencial.page.html',
  styleUrls: ['credencial.page.scss']
})
export class CredencialPage {
  dni: string = '';
  constructor(private apiService: ApiService) {}

  makeApiRequest() {
    if(this.dni){
      this.apiService.sendRequest(this.dni).subscribe(
        (response) => {

          console.log('API Response:', response);
        },
        (error) => {

          console.error('API Error:', error);
        }
      );
    } else {
      console.log("dni vacio");
    }
  }
}
