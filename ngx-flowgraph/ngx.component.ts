import { Component, defineInjectable, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx.component.html',
  styleUrls: ['./ngx.component.css'],
})

export class NgxComponent implements OnInit {
  public node: any = [];
  public edge: any = [];
  public eg_node: any;
  public eg_edge: any;

  public curve: any;

  arr = ['abcd', 'efgh', '1234'];
  list: any = [];
  update$: Subject<any> = new Subject();
  zoomToFit$: Subject<any> = new Subject();
  center$: Subject<any> = new Subject();

  // tilt() {
  //   this.path = "M70 250 L350 100";
  // }
  path: any = [];
  view: any;

  onResize(event: any) {
    this.view = [event.target.innerWidth, 400];
  }

  y: any;
  yy: any;

  resize(x: any) {

    console.log("x", x.target.innerWidth);
    this.y = (x.target.innerWidth / 100) * 5;
    console.log("y==", this.y);
    this.yy = (x.target.innerHeight / 100) * 5;
    console.log("height", x.target.innerHeight);
    console.log(this.yy);

    setTimeout(() => {
      let cls = document.getElementsByClassName("line");
      console.log(cls);
      console.log(this.path);
      for (let i = 0; i < cls.length; i++) {
        setTimeout(() => {
          console.log("cls== ", cls[i].attributes[4].nodeValue);
          this.newpath[i] = cls[i].attributes[4].nodeValue;
        }, 200);
      }
    }, 150);
    setTimeout(() => {
      console.log("newpath", this.newpath.length);

    }, 200);

  }

  layoutSettings = {
    orientation: 'TB',
  };

  constructor(public node_edge: CommonService) {
    this.view = [innerWidth, 400];
  }

  panToNodeObservable: Subject<string> = new Subject<string>();

  path_animate = "M240,50L248.33333333333334,50C256.6666666666667,50,273.3333333333333,50,290,50C306.6666666666667,50,323.3333333333333,50,331.6666666666667,50L340,50";
  eg = { path: "M240, 50L248.33333333333334, 50C256.6666666666667, 50, 273.3333333333333, 50, 290, 50C306.6666666666667, 50, 323.3333333333333, 50, 331.6666666666667, 50L340, 50" }


  @ViewChild('linkTemplate') linkTemplate: ElementRef
  ngOnInit(): void {

    var v = window.innerWidth;
    this.y = (v / 100) * 5;
    this.onClick();
    this.center$.next(true);
    this.panToNodeObservable.next(this.node.id);
    var name = document.getElementsByClassName("node");
    console.log("name=", name);

    var link = document.getElementById("linkTemplate");


    this.eg_node = [{
      "id": "31",
      "label": "Node 31",
      "data": {
        "shape": "circle"
      }
    }

    ];

    this.eg_edge = [{
      "source": "6",
      "target": "31",
      "label": "Link 6-31",
      "delay": "5"
    },

    {
      "source": "31",
      "target": "22",
      "label": "Link 31-22",
      "delay": "5"
    }
    ];

    this.curve = shape.curveBasis;
    this.levelData();
  }

  newpath: any = [];

  onClick() {
    setTimeout(() => {
      let cls = document.getElementsByClassName("line");
      console.log(cls);
      console.log(this.path);
      for (let i = 0; i < cls.length; i++) {
        setTimeout(() => {
          console.log("cls== ", cls[i].attributes[4].nodeValue);
          this.newpath.push(cls[i].attributes[4].nodeValue);
          console.log(this.newpath);
        }, 200);
      }
    }, 150);



  }

  node_array: any = this.node_edge.nodesjson.map((x: any) => {
    return x.id;
  });
  edge_array_source = this.node_edge.edgejson.map((y: any) => {
    return y.source;
  });
  edge_array_target = this.node_edge.edgejson.map((n: any) => {
    return n.target;
  });

  levelData() {

    this.node = [{
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
    ];

    this.edge = [{
      "source": "1",
      "target": "2",
      "label": "Link 1-2",
      "delay": "5s",
      "color": "yellow"

    },
    {
      "source": "2",
      "target": "3",
      "label": "Link 2-3",
      "delay": "10s",
      "color": "green"

    },
    {
      "source": "1",
      "target": "4",
      "label": "Link 1-4",
      "delay": "7s",
      "color": "gray"

    },
    ];


  };

  subtract() {
    this.levelData();
  }

  updateData() {
    for (let n = 0; n < this.eg_node.length; n++) {
      this.node.push(this.eg_node[n]);
    };

    console.log(this.eg_edge.length);
    for (let i = 0; i < this.eg_edge.length; i++) {
      this.edge.push(this.eg_edge[i]);
    };

    this.update$.next(true);
  }
}




