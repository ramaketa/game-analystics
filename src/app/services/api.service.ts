import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from "../shared/team";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAllteams(): Observable<Team[]> {
    return this.http.get<Team[]>('https://api.opendota.com/api/teams');
  }
}
