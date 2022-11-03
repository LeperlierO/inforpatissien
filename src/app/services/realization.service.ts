import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Realization, RealizationPagination } from '../models/realization';

@Injectable({
  providedIn: 'root'
})
export class RealizationService {

  public realizationsPage!: RealizationPagination;
  serverUrl = 'https://inforpatissien-api.azurewebsites.net'
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

}
