import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BodyRealization, MiniRealization, Realization, RealizationPagination } from '../models/realization';

@Injectable({
  providedIn: 'root'
})
export class RealizationService {

  public realizationsPage!: RealizationPagination;
  serverUrl = 'https://inforpatissien-api.azurewebsites.net'
  // serverUrl = 'https://localhost:44383/';
  realizationPath = '/realizations'

  constructor(private http: HttpClient) { }

  getRealizations(page: number): Observable<RealizationPagination>{
    let params = new HttpParams().set('page', page);
    return this.http
      .get<RealizationPagination>(
        `${this.serverUrl}${this.realizationPath}`, {params: params}
      ).pipe(
        map((response: RealizationPagination) => {
          if(response.data[0] != null) response.data.forEach(r => {
            const mainPhoto = r.photos.find(p => p.main)!;
  
            if(mainPhoto != null){
              r.mainPhoto = mainPhoto;
              r.photos.splice(r.photos.indexOf(mainPhoto),1);
            }
          });

          return response;
      }));
  }

  getMiniRealizations(): Observable<MiniRealization[]>{
    return this.http
      .get<MiniRealization[]>(
        `${this.serverUrl}${this.realizationPath}-mini`
      );
  }

  getRealization(id: number): Observable<Realization>{
    return this.http
      .get<Realization>(
        `${this.serverUrl}${this.realizationPath}/` + id
      ).pipe(
        map((response: Realization) => {
          const mainPhoto = response.photos.find(p => p.main)!;
  
          if(mainPhoto != null){
            response.mainPhoto = mainPhoto;
            response.photos.splice(response.photos.indexOf(mainPhoto),1);
          }

          return response;
      }));
  }

  createRealization(body: BodyRealization):Observable<Realization>{
    return this.http
    .put<Realization>(
      `${this.serverUrl}${this.realizationPath}`,
      body
    );
  }

  uploadFile(file: File, realizationCode: string, fileName: string):Observable<string>{
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    formData.append("realizationCode", realizationCode);
    formData.append("fileName", fileName);

    return this.http
      .post<string>(
        `${this.serverUrl}${this.realizationPath}/upload-image`, 
        formData
      );
  }

  deleteRealization(id: number){
    return this.http
    .delete(
      `${this.serverUrl}${this.realizationPath}/` + id
    );
  }

}
