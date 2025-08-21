import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly users: User[] = [];

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl);
  }
  findById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${id}`);
  }
  create(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}`, user);
  }
  update(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/${user.id}`, user);
  }
  delete(id: number): void {
    this.http.delete(`${environment.apiUrl}/${id}`);
  }
}
