import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  batsmanArrayInd1st: any;
  batsmanArrayEng1st: any;
  bowlerArrayEng1st:any;
  bowlerArrayInd1st:any;
  batsmanArrayInd2nd:any;
  bowlerArrayEng2nd:any;
  agGridrowData_1: any;
  agGridrowData_2: any;

  nodesjson: any;
  edgejson : any;



  demoArray: any = [];



  obj_3: any;
  constructor() {
    this.batsmanArrayInd1st = JSON.parse(localStorage.getItem("1stIndBat"));
    this.bowlerArrayEng1st = JSON.parse(localStorage.getItem("1stEngBowl"));
    this.batsmanArrayEng1st = JSON.parse(localStorage.getItem("1stEngBat"));
    this.bowlerArrayInd1st = JSON.parse(localStorage.getItem("1stIndBowl"));
    this.batsmanArrayInd2nd = JSON.parse(localStorage.getItem("2ndIndBat"));
    this.bowlerArrayEng2nd = JSON.parse(localStorage.getItem("2ndEngBowl"))
    //  this.bowlerArray = JSON.parse(localStorage.getItem("bowler"))

    this.demoArray = JSON.parse(localStorage.getItem("demoObject"));
    this.agGridrowData_1 =JSON.parse(localStorage.getItem("instanceStorage_1"))
    this.agGridrowData_2 = JSON.parse(localStorage.getItem("instanceStorage_2"));

    this.nodesjson = [
      {
        "id": "0",
        "label": "Node 0",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "1",
        "label": "Node 1",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "2",
        "label": "Node 2",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "3",
        "label": "Node 3",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "4",
        "label": "Node 4",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "5",
        "label": "Node 5",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "6",
        "label": "Node 6",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "7",
        "label": "Node 7",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "8",
        "label": "Node 8",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "9",
        "label": "Node 9",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "10",
        "label": "Node 10",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "11",
        "label": "Node 11",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "12",
        "label": "Node 12",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "13",
        "label": "Node 13",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "14",
        "label": "Node 14",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "15",
        "label": "Node 15",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "16",
        "label": "Node 16",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "17",
        "label": "Node 17",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "18",
        "label": "Node 18",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "19",
        "label": "Node 19",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "20",
        "label": "Node 20",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "21",
        "label": "Node 21",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "22",
        "label": "Node 22",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "23",
        "label": "Node 23",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "24",
        "label": "Node 24",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "25",
        "label": "Node 25",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "26",
        "label": "Node 26",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "27",
        "label": "Node 27",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "28",
        "label": "Node 28",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "29",
        "label": "Node 29",
        "data": {
          "shape": "circle"
        }
      },
      {
        "id": "30",
        "label": "Node 30",
        "data": {
          "shape": "circle"
        }
      }
    ];
    this.edgejson = [
      {
        "source": "0",
        "target": "23",
        "label": "Link 0-23"
      },
      {
        "source": "1",
        "target": "22",
        "label" : "Link 1-22"
      },
      {
        "source": "2",
        "target": "18",
        "label" : "Link 2-18"
      },
      {
        "source": "3",
        "target": "22",
        "label": "Link 3-22"
      },
      {
        "source": "4",
        "target": "20",
        "label": "Link 4-20"
      },
      {
        "source": "4",
        "target": "16",
        "label": "Link 4-16"
      },
      {
        "source" : "5",
        "target" : "21",
        "label"  : "Link 5-21"
      },
      {
        "source": "7",
        "target": "17",
        "label" : "Link 7-17"
      },
      {
        "source": "7",
        "target": "26",
        "label" : "Link 7-26"
      },
      {
        "source": "8",
        "target": "19",
        "label": "Link 8-19"
      },
      {
        "source": "8",
        "target": "27",
        "label": "Link 8-27"
      },
      {
        "source": "9",
        "target": "25",
        "label": "Link 9-25"
      },
      {
        "source": "9",
        "target": "30",
        "label": "Link 9-30"
      },
      {
        "source": "10",
        "target": "14",
        "label": "Link 10-14"
      },
      {
        "source": "11",
        "target": "29",
        "label" : "Link 11-29"
      },
      {
        "source": "11",
        "target": "28",
        "label" : "Link 11-28"
      },
      {
        "source": "12",
        "target": "22",
        "label": "Link 12-22"
      },
      {
        "source": "13",
        "target": "24",
        "label": "Link 13-24"
      },
      {
        "source": "13",
        "target": "15",
        "label": "Link 13-15"
      },
      {
        "source": "14",
        "target": "4",
        "label": "Link 14-4"
      },
      {
        "source": "14",
        "target": "7",
        "label": "Link 14-7"
      },
      {
        "source": "14",
        "target": "11",
        "label": "Link 14-11"
      },
      {
        "source": "15",
        "target": "12",
        "label": "Link 15-12"
      },
      {
        "source": "16",
        "target": "5",
        "label": "Link 16-5"
      },
      {
        "source": "17",
        "target": "3",
        "label": "Link 17-3"
      },
      {
        "source": "18",
        "target": "8",
        "label": "Link 18-8"
      },
      {
        "source": "19",
        "target": "2",
        "label": "Link 19-2"
      },
      {
        "source": "20",
        "target": "1",
        "label": "Link 20-1"
      },
      {
        "source": "21",
        "target": "9",
        "label" : "Link 21-9"
      },
      {
        "source": "22",
        "target": "6",
        "label" : "Link 22-6"
      },
      {
        "source": "23",
        "target": "13",
        "label" : "Link 23-13"
      },
      {
        "source": "24",
        "target": "0",
        "label": "Link 24-0"
      },
      {
        "source": "25",
        "target": "5",
        "label": "Link 25-5"
      },
      {
        "source": "26",
        "target": "2",
        "label": "Link 26-2"
      },
      {
        "source": "27",
        "target": "3",
        "label": "Link 27-3"
      },
      {
        "source": "28",
        "target": "12",
        "label": "Link 28-12"
      },
      {
        "source": "29",
        "target": "0",
        "label": "Link 29-0"
      },
      {
        "source": "30",
        "target": "1",
        "label": "Link 30-1"
      }
    ]
  }



}
