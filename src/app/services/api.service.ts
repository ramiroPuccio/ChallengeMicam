import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://www-qa.micamsalud.com.ar/api_challenge_micam/prueba-credencial';

  constructor(private httpClient: HttpClient) {}

  sendRequest(dni:string) {
    const requestBody = {
      token_api: 'abc123',
      nro_documento: dni,
    };

    return this.httpClient.post(this.apiUrl, requestBody);
  }
}
