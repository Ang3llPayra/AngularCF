import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	//private apiUrl = 'http://3.239.227.229:4000/datos'; // La URL del GET en la API
	private postUrl = 'https://api.99mas1.mx/leads'; // POST
	

  constructor(private http: HttpClient) {}

  /*
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
 */

  enviarDatos(lead: any): Observable<any> {
    return this.http.post<any>(this.postUrl, lead);
  }

}
