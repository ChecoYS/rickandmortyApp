import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/models/character.model';
import { ResponseAPI } from 'src/app/shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characterList: Observable<ResponseAPI> = new Observable<ResponseAPI>();
  character: Observable<Character> = new Observable<Character>();

  constructor(private http: HttpClient) {}

  /**
   * This function takes a url as a parameter and returns an observable of type ResponseAPI
   * @param {string} url - string - The URL of the API you want to call.
   * @returns The characterList is being returned.
   */
  public getCharacters(url: string): Observable<ResponseAPI> {
    this.characterList = this.http.get<ResponseAPI>(url).pipe();
    return this.characterList;
  }
}
