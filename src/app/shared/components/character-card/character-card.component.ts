import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;
  @Output() printCharacterEvent = new EventEmitter<Character>();

  characterCopy!: Character;
  constructor() {}

  resetCharacter() {
    console.log(this.characterCopy);
    this.character = this.characterCopy;
  }

  ngOnInit() {
    this.characterCopy = JSON.parse(JSON.stringify(this.character));
  }

  printCharacter(character: Character) {
    this.printCharacterEvent.emit(character);
  }
}
