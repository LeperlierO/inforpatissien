import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodyRealization, Realization, RealizationPagination } from '../models/realization';

@Injectable({
  providedIn: 'root'
})
export class RealizationService {

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'mon-entete-personnalise':'maValeur'
    })
  };

  public realizationsPage!: RealizationPagination;
  serverUrl = 'https://inforpatissien-api.azurewebsites.net'
  //serverUrl = 'https://localhost:44383/';
  realizationPath = '/realizations'

  constructor(private http: HttpClient) { }

  getRealizations(page: number): Observable<RealizationPagination>{
    let params = new HttpParams().set('page', page);
    return this.http
      .get<RealizationPagination>(
        `${this.serverUrl}${this.realizationPath}`, {params: params}
      );
  }

  getRealization(code: string): Observable<Realization>{
    return this.http
      .get<Realization>(
        `${this.serverUrl}${this.realizationPath}/` + code
      );
  }

  createRealization(body: BodyRealization):Observable<Realization>{
    return this.http
    .put<Realization>(
      `${this.serverUrl}${this.realizationPath}`,
      body
    );
  }

  uploadFile(file: File, userCode: string, realizationCode: string, fileName: string):Observable<string>{
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    formData.append("userCode", userCode);
    formData.append("realizationCode", realizationCode);
    formData.append("fileName", fileName);

    return this.http
      .post<string>(
        `${this.serverUrl}${this.realizationPath}/upload-image`, 
        formData
      );
  }

}
