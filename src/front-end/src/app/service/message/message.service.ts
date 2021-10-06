import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Imessage} from '../../models/message/Imessage';
import {environment} from '../../../environments/environment';

const API_URL = environment.API_URL + '/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }


  getBySenderId(id: number): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/sender/${id}`);
  }

  getByReceiverId(id: number): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/receiver/${id}`);
  }

  getAllByUser(id: number): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/${id}`);
  }

  create(message: Imessage): Observable<Imessage> {
    return this.httpClient.post<Imessage>(API_URL, message);
  }
  getBySenderAndReceiver(id1: any, id2: any): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/${id1}/${id2}`)
  }
updateStatusMs(id: number): Observable<Imessage>{
    // @ts-ignore
  return this.httpClient.put<Imessage>(API_URL + "/" + id)
}
  getByReceiverIdAndStatus(id: number): Observable<Imessage[]> {
    return this.httpClient.get<Imessage[]>(API_URL + `/status/${id}`);
  }
}
