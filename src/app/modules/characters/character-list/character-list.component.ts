import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/core/services/character.service';
import { Character } from 'src/app/shared/models/character.model';
import { ResponseAPI } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  //Data
  listCharacters$: Observable<ResponseAPI>;
  apiURL: string = environment.apiCharacter;
  searchedCharacter: string = '';

  /**
   * The constructor function is a special function that is called when a new instance of the class is
   * created
   * @param {CharacterService} characterService - This is the service that we created earlier.
   */
  constructor(private characterService: CharacterService) {
    this.listCharacters$ = this.characterService.getCharacters(this.apiURL);
  }
  ngOnInit(): void {}

  /**
   * This function takes a parameter of type Character and prints it to the console.
   * @param {Character} character - Character
   */
  printCharacter(character: Character) {
    console.log(character);
  }

  /**
   * If the url parameter is null, then set the url variable to the apiURL variable
   * @param {string | null} url - string | null
   */
  nextPage(url: string | null) {
    url = url ? url : this.apiURL;
    this.listCharacters$ = this.characterService.getCharacters(url);
  }
}
