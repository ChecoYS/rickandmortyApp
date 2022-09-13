import { Character } from './character.model';

export interface ResponseAPI {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
