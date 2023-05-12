import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private baseUrl = '[GET] https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc'

  constructor(private http: HttpClient) {}

  getStandings(leagueId: number) {
    const url = `${this.baseUrl}/leagues/${leagueId}/standings`;

    return this.http.get(url);
  }
}
