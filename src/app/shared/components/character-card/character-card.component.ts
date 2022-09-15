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

  /**
   * It resets the character to the original character
   */
  resetCharacter() {
    this.character = this.characterCopy;
  }

  /**
   * We're creating a copy of the character object, so that we can compare the original character
   * object to the copy
   */
  ngOnInit() {
    this.characterCopy = JSON.parse(JSON.stringify(this.character));
  }

  /**
   * The function takes a character as an argument, and emits the character to the printCharacterEvent
   * @param {Character} character - Character - This is the character that we want to pass to the
   * parent component.
   */
  printCharacter(character: Character) {
    this.printCharacterEvent.emit(character);
  }
}
