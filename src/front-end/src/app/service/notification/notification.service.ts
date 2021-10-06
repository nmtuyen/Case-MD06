import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INotification} from '../../models/notification/notification';

const API_URL = environment.API_URL + '/notifications';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<INotification[]> {
    return this.httpClient.get<INotification[]>(API_URL);
  }

  create(notification: INotification): Observable<INotification> {
    return this.httpClient.post<INotification>(API_URL, notification);
  }

  // tìm tất cả thông báo theo Id user
  findByUserId(id: number): Observable<INotification[]> {
    return this.httpClient.get<INotification[]>(API_URL + `/user/${id}`);
  }

  // Tìm thông báo đã được đọc theo user
  findByStatus0(id: number): Observable<INotification[]> {
    return this.httpClient.get<INotification[]>(API_URL + `/status0/${id}`);
  }
  updateStatus(id: number): Observable<INotification>{
    // @ts-ignore
    return this.httpClient.put<INotification>(API_URL + "/" + id);
  }
}
