import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface People {
  name: string;
  gender: string;
  species: string;
}

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private readonly httpClient = inject(HttpClient);

  requestPeopleById(id: string): Observable<People> {
    return this.httpClient.get<People>('https://swapi.dev/api/people/' + id);
  }
}
