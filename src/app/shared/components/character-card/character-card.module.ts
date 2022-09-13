import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CharacterCardComponent],
  providers: [],
})
export class CharacterCardModule {}
