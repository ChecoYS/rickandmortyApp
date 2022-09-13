import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterRoutingModule } from './character.routing';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    CharacterCardModule,
  ],
  exports: [],
  providers: [],
})
export class CharacterModule {}
