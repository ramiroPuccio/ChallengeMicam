import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../respuesta';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.micamsalud.com.ar/api_challenge_micam/prueba-credencial';

  constructor(private httpClient: HttpClient) {}

  sendRequest(dni:string): Observable<Respuesta> {
    const requestBody = {
      token_api: 'abc123',
      nro_documento: dni,
    };

    return this.httpClient.post<Respuesta>(this.apiUrl, requestBody);
  }
}
