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

  constructor(private characterService: CharacterService) {
    this.listCharacters$ = this.characterService.getCharacters(this.apiURL);
  }
  ngOnInit(): void {}

  printCharacter(character: Character) {
    console.log(character);
  }
}
