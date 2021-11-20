import { Injectable } from '@angular/core';

export interface Branch {
  salesperson: string;
  telephone: string;
  address: string;
  stock: any[]
  innings: string,
  playername: string
  runs: number,
  balls:number,
  fours:number,
  sixes:number
}

@Injectable()
export class BranchService {



  

  private branchData: any = {
    India_1st_innings: {
  

      stock: [
        { playername:"Rohit Sharma", runs: 19, balls: 105, fours: 1, sixes: 0 },
        { playername:"KL Rahul", runs: 0, balls: 4, fours: 0, sixes: 0 },
        { playername:"Cheteshwar Pujara", runs: 1, balls: 9, fours: 0, sixes: 0 },
        { playername:"Virat Kohli(c)", runs: 7, balls:17 , fours:1 , sixes:0  },
        { playername:"Ajinkya Rahane", runs: 18, balls:54 , fours:3 , sixes:0  },
        { playername:"Rishabh Pant", runs:2 , balls:9 , fours:0 , sixes:0  },
        { playername:"Ravindra Jadeja", runs:4 , balls:29 , fours:0 , sixes:0  },
        { playername:"Mohammed Shami", runs:0 , balls:1 , fours:0 , sixes:0  },
        { playername:"Ishant Sharma", runs:8 , balls:10 , fours:1 , sixes:0  },
        { playername:"Jasprit Bumrah", runs:0 , balls:1 , fours:0 , sixes:0  },
        { playername:"Mohammed Siraj", runs:3 , balls:10 , fours:0 , sixes:0  },

    
      ]
    
      
    },
    India_2nd_innings: {
      innings: "India 2nd innings",
      playername :[
        { playername: "Rohit Sharma" },
        { playername: "KL Rahul" },
        { playername: "Cheteshwar Pujara" },
        { playername: "Virat Kohli(c)" },
        { playername: "Ajinkya Rahane" },
        { playername: "Rishabh Pant" },
        { playername: "Ravindra Jadeja" },
        { playername: "Mohammed Shami" },
        { playername: "Mohammaj Siraj" },
        { playername: "Ishant Sharma" },
        { playername: "Jasprit Bumrah" },
        { playername: "Rory Burns" },
        { playername: "Haseeb Hameed" },
        { playername: "Dawid Malan" },
        { playername: "Joe Root(c)" },
        { playername: "Jonny Bairstow" },
        { playername: "Jos Buttler" },
        { playername: "Moeen Ali" },
        { playername: "Sam Curran" },
        { playername: "Craig Overton" },
        { playername: "Ollie Robinson" },
        { playername: "James Anderson" },
      ],
      stock: [
        {  runs: "Lada",  balls: "XRAY",  fours: 2000    ,sixes:null },
        {  runs: "Fiat",  balls: "Punto", fours: 10000   ,sixes:null },
        {  runs: "Honda", balls: "Jazz",  fours: 100     ,sixes:null},
        {  runs: "Morris",balls: "Marina",fours: 3200    ,sixes:null },
        { runs: "Austin",balls: "Allergroce",fours: 5100,sixes:null }
      ]
    }
};



  get branches(): string[] {
    return Object.keys(this.branchData);
  
  }
  

  getBranchData(branch: string): Branch {
    return this.branchData[branch];
  }
}