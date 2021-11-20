import { Injectable } from '@angular/core';

export interface New {
  innings: string;
  playername: string;
  runs: number,
  balls: number,
  fours: number,
  sixes: number,
}
@Injectable({
  providedIn: 'root'
})

export class NewService {
  public newData = {
    India_1st_innings :{
      
    }
  }
  constructor() { }
}
