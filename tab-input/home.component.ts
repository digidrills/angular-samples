import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  myOvers: string;
  batsmanForm: FormGroup;
  bowlerForm: FormGroup;
  obj_1st_IndBat: any = [];
  obj_1st_EndBat: any = [];
  obj_1st_IndBowl: any = [];
  obj_1st_EngBowl: any = [];
  obj_2nd_EngBowl:any =[];
  obj_2nd_IndBat:any=[];


  innings = [{ innings: "India 1st innings" }, { innings: "England 1st innings" }, {
    innings: 'India 2nd innings'
  },{
    innings: 'England 2nd innings'
  }];
  players = [
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
  ]


  constructor(private fb: FormBuilder,
    private common: CommonService, ) { }

  ngOnInit(): void {
    this.batsmanForm = this.fb.group({
      playername: ['', Validators.required],
      runs: ['', Validators.required],
      balls: ['', Validators.required],
      innings: ['', Validators.required],
      fours: ['', Validators.required],
      sixes: ['', Validators.required],
    })
    this.bowlerForm = this.fb.group({
      playername: ['', Validators.required],
      innings: ['', Validators.required],
      overs: ['', Validators.required],
      maidens: ['', Validators.required],
      runs: ['', Validators.required],
      wicket: ['', Validators.required],

    })

  }
  onSubmit() {
    if (this.batsmanForm.value.innings === 'India 1st innings') {
      var sr = (this.batsmanForm.value.runs * 100) / this.batsmanForm.value.balls;
      this.batsmanForm.value.strikerate = sr.toFixed(2);
      this.obj_1st_IndBat.push(this.batsmanForm.value);
      localStorage.setItem("1stIndBat", JSON.stringify(this.obj_1st_IndBat))
    } else {
      if (this.batsmanForm.value.innings === 'England 1st innings') {
        var sr = (this.batsmanForm.value.runs * 100) / this.batsmanForm.value.balls;
        this.batsmanForm.value.strikerate = sr.toFixed(2);
        this.obj_1st_EndBat.push(this.batsmanForm.value);
        localStorage.setItem("1stEngBat", JSON.stringify(this.obj_1st_EndBat))
      } else {
        if (this.batsmanForm.value.innings === 'India 2nd innings'){
          var sr = (this.batsmanForm.value.runs * 100) / this.batsmanForm.value.balls;
          this.batsmanForm.value.strikerate = sr.toFixed(2);
          this.obj_2nd_IndBat.push(this.batsmanForm.value);
          localStorage.setItem("2ndIndBat", JSON.stringify(this.obj_2nd_IndBat))
        }
      }
    }
  }

  addBowler() {
    if (this.bowlerForm.value.innings === 'England 1st innings') {
      var econ = (this.bowlerForm.value.runs) / (this.bowlerForm.value.overs);
      this.bowlerForm.value.economy = econ.toFixed(2);
      this.obj_1st_IndBowl.push(this.bowlerForm.value)
      localStorage.setItem("1stIndBowl", JSON.stringify(this.obj_1st_IndBowl))
    } else {
      if (this.bowlerForm.value.innings === 'India 1st innings') {
        var econ = (this.bowlerForm.value.runs) / (this.bowlerForm.value.overs);
        this.bowlerForm.value.economy = econ.toFixed(2);
        this.obj_1st_EngBowl.push(this.bowlerForm.value)
        localStorage.setItem("1stEngBowl", JSON.stringify(this.obj_1st_EngBowl))
      } else {
        if (this.bowlerForm.value.innings === 'India 2nd innings') {
          var econ = (this.bowlerForm.value.runs) / (this.bowlerForm.value.overs);
          this.bowlerForm.value.economy = econ.toFixed(2);
          this.obj_2nd_EngBowl.push(this.bowlerForm.value)
          localStorage.setItem("2ndEngBowl", JSON.stringify(this.obj_2nd_EngBowl))
        }
      }
    }
  }
}
