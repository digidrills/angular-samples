import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit,AfterContentInit, ViewEncapsulation} from '@angular/core';
import { Column, ColumnApi, GridApi, GridReadyEvent, RowNode, GridOptions } from "ag-grid";
import { AgGridAngular } from 'ag-grid-angular';

import "ag-grid-enterprise/chartsModule";
import "ag-grid-enterprise";
import { ChartOptions, ChartRef, CreateRangeChartParams, AgChartOptions } from 'ag-grid-community';
import { AgChart, } from 'ag-charts-community';
import { DiagramComponent, Diagram, BpmnDiagrams, NodeModel, BpmnShapeModel, BasicShapeModel, FlowShapeModel, NodeAnnotationDirective } from '@syncfusion/ej2-angular-diagrams';
import { Connector, ConnectorModel, DiagramConstraints } from '@syncfusion/ej2-diagrams';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonService } from '../common.service';
import { Subject } from 'rxjs';
import * as shape from 'd3-shape'
import * as curve from 'd3-shape'





// import { MatSelect } from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  private api: any;

  // zoomToFit$ : Subject<boolean> = new Subject();

  // fitGraph(){
  //   this.zoomToFit$.next(true);
  // }

  rowdata = [
    { name: 'rohit', runs: 23, balls: 12, fours: 2, sixes: 1, strikerate: 23, id: 0 },
    { name: 'rahul', runs: 53, balls: 45, fours: 5, sixes: 0, strikerate: 67, id: 1 },
    { name: 'virat', runs: 121, balls: 93, fours: 3, sixes: 2, strikerate: 103.3, id: 2 },
    { name: 'ms dhoni', runs: 50, balls: 12, fours: 2, sixes: 5, strikerate: 200, id: 3 },
    { name: 'yuvraj', runs: 43, balls: 35, fours: 5, sixes: 0, strikerate: 167, id: 4 },
    { name: 'hardhik', runs: 30, balls: 30, fours: 2, sixes: 1, strikerate: 100, id: 5 },
    { name: 'pant', runs: 5, balls: 42, fours: 4, sixes: 3, strikerate: 170, id: 6 },
  ];
  @ViewChild("diagram")

  options: any;
  options_pie: any;
  options_line: any;
  options_scatter: any;
  @ViewChild('ngxgraph') ngxgraph: ElementRef;

  public shape: BasicShapeModel;
  public terminator: FlowShapeModel;
  public process: FlowShapeModel;
  public decision: FlowShapeModel;
  public preDefinedProcess: FlowShapeModel;
  public nodes: any;
  public connectors: ConnectorModel[];
  public diagramConstraints: DiagramConstraints;

  public node: any;
  public edge: any;

  public width : any;
  public height: any;

  public level: any;
  simpleFunction() {
    var w = window.innerHeight;
    var h = window.innerWidth;

    console.log("width and height", w, h);
  }

  myFunction(event: any) {
    console.log(event);
    alert(event.label);
    // this.level = 0.7;
  }
  update$: Subject<any> = new Subject();

    updateChart() {
    this.update$.next(true);
  }
  zoomInst() {
    alert("Nithish");
    console.log("Nithish");
  }
  curve:any;

  nodeWithLinks: any= [];

  public eg_node : any = {};
  public eg_edge : any = {};

  onClick(){
    // this.ngxgraph.nativeElement.zoomToFit$;
    this.node.push(this.eg_node);
    this.edge.push(this.eg_edge);
    console.log("nodes after click",this.node)
  }


  ngOnInit(): void {

    
    
    console.log("nodes", this.node);


    // this.node_edge.nodesjson.map((x: any)=>{
    //     this.node_edge.edgejson.map((y:any)=>{
    //       if (x.id === (y.source && y.target) ){
    //           this.nodeWithLinks.push(x);            
    //       }
    //     });
    // });

    // console.log("nodes=== ",this.node_edge.nodesjson);

    // this.nodeWithLinks.forEach((x : any,index: any,arr: any)=>{
    //   if(arr.indexOf(x) !== arr.lastIndexOf(x)){
    //     arr.splice(index,1);
    //   }

    // });
    // console.log("nodes", this.nodeWithLinks);



    this.level = 0.1;
    // this.fitGraph();
    this.simpleFunction();

    this.shape = { type: 'Basic', shape: 'Rectangle' };
    this.terminator = { type: 'Flow', shape: 'Terminator' };
    this.process = { type: 'Flow', shape: 'Process' };
    this.decision = { type: 'Flow', shape: 'Decision' };
    this.preDefinedProcess = { type: 'Flow', shape: 'PreDefinedProcess' };
    this.connectors = [
      { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
      { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
      { id: 'connector3', sourceID: 'node3', targetID: 'node4' },
      { id: 'connector4', sourceID: 'node4', targetID: 'node5' },
      { id: 'connector5', sourcePoint: { x: 700, y: 250 }, targetPoint: { x: 500, y: 450 } },
      { id: 'connector6', sourceID: 'node7', targetID: 'node6' },
      { id: 'connector7', sourceID: 'node1', targetID: 'node6' },

    ]
    this.nodes = [
      {
        id: 'node1', offsetX: 200, offsetY: 240,
        shape: { type: "Basic", shape: "Rectangle" },
        annotations: [{ content: "start" }]
      },
      {
        id: 'node2', offsetX: 350, offsetY: 240,
        shape: { type: 'Flow', shape: 'Terminator' }
      },
      {
        id: 'node3', offsetX: 550, offsetY: 240,
        shape: { type: "Flow", shape: "Process" }
      },
      {
        id: 'node4', offsetX: 700, offsetY: 240,
        shape: { type: "Flow", shape: "Decision", textContent: 'pending' },
      },
      {
        id: 'node5', offsetX: 900, offsetY: 240,
        shape: { type: "Flow", shape: "PreDefinedProcess" }
      },
      {
        id: 'node6', offsetX: 450, offsetY: 500,
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'Message' } }
      },
      {
        id: 'node7', offsetX: 550, offsetY: 500,
        shape: {
          type: 'Bpmn', shape: 'Activity', activity: {
            activity: 'Task', task: {
              type: 'Send'
            }
          }
        }
      }
    ];


    // this.terminator = { type: "Flow", shape: "Terminator" };
    // this.process = { type: "Flow", shape: "Process" };
    // this.decision = { type: "Flow", shape: "Decision" };
    // this.preDefinedProcess = { type: "Flow", shape: "PreDefinedProcess" };
  }

  constructor(public node_edge: CommonService) {
    this.diagramConstraints = DiagramConstraints.Default & ~DiagramConstraints.UserInteraction;
    this.options_scatter = {
      title: {
        text: "cricket statictical scatter chart"
      },
      subtitle: {
        text: "scores details"
      },

      data: this.rowdata,
      series: [{
        type: 'scatter',
        title: 'Details',
        xKey: 'runs',
        xName: 'Runs',
        yKey: 'balls',
        yName: 'Balls',
        sizeKey: 'fours',
        sizeName: 'Fours',
        fill: 'blue',
        stroke: 'orange',
        marker: {
          shape: 'square',
          size: 6,
          maxSize: 30,
        }
      }],
      axes: [
        {
          type: 'number',
          position: 'bottom'
        },
        {
          type: 'number',
          position: 'left'
        }
      ],
    },

      this.options_line = {
        title: {
          text: "cricket statictical line chart"
        },
        subtitle: {
          text: "scores details",
        },
        data: this.rowdata,
        series: [
          {
            xKey: 'name',
            yKey: 'runs',
            yName: 'Runs'
          },
          {
            xKey: 'name',
            yKey: 'balls',
            yName: 'balls',
            stroke: 'yellow',
            marker: {
              fill: 'gray',
              stroke: 'blue'
            }
          },

        ]
      },

      this.options_pie = {
        title: {
          text: "cricket statictical pie chart",
        },
        subtitle: {
          text: "scores details",
        },
        data: this.rowdata,

        series: [
          {
            type: 'pie',
            angleKey: 'runs',
            labelKey: 'name',
            label: {
              minAngle: 5,
            },
            innerRadiusOffset: -70,

            highlightStyle: {
              item: {
                enabled: true,
                fill: 'red',
              },
            }
          },
        ],
      };

    this.options = {
      title: {
        text: "cricket statictical graph"
      },
      subtitle: {
        text: "scores details"
      },
      data: this.rowdata,
      series: [
        {
          type: 'column',
          xKey: 'name',
          yKeys: ['runs', 'balls', 'fours', 'sixes'],
          yNames: ['Runs', 'Balls', 'Fours', 'Sixes'],
          grouped: true,

          fills: ['pink', 'yellow', 'green', 'blue'],
        }
      ],
    };

    var obj = new Object();
    // obj.colour = 'red';
    console.log("object", obj);
  }



  autoGroupColumnDef: any;

  columndata = [
    { headerName: 'playername', field: 'name' },
    { headerName: 'runs', field: 'runs' },
    { headerName: 'balls faced', field: 'balls' },
    { headerName: 'fours', field: 'fours' },
    { headerName: 'sixes', field: 'sixes' },
    { headerName: 'strikerate', field: 'strikerate' }
  ];




  // chart: {
  //   data: { name: 'rohit', runs: 23, balls: 12, fours: 2, sixes: 1, strikerate: 23, id: 0 },

  //   autoSize: false,
  //   height: 500,
  //   width: 1000,
  //   title: {
  //     enabled: true,
  //     text: 'individual record',
  //   }
  // },

  // ngAfterViewInit(){
  //   var width = this.ngxgraph.nativeElement.offsetWidth;
  //   var height = this.ngxgraph.nativeElement.offsetHeight;

  //   console.log("width :", width);
  //   console.log("height :", height);
  // }

  // ngAfterContentInit() {
  

  // }



  params: any
  onRowClicked(event: any) {
    console.log('chart window');
    console.log(event.data)
    this.params = {
      cellRange: {
        rowStartIndex: event.rowIndex,
        rowEndIndex: event.rowIndex,
        height: 600,
        width: 1000,
        // rowEndIndex : 4,
        columns: ['name', 'runs', 'balls', 'fours', 'sixes'],
      },
      chartType: 'groupedColumn',
      chartThemeName: 'ag-pastel',
      // chartOptions:{
      //   height: 600,
      //   width: 1000,
      // },


      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: 'top scorers',
          },

          autoSize: false,
          height: 600,
          width: 1000

        }

      }


    }
    this.api.createRangeChart(this.params);
    console.log(this.api);

  }
  onGridready(params: any) {
    console.log(params)


  }
  fillColor: any;

  changeColor() {
    this.fillColor = 'blue';
  }


  // onSelectionChanged(params :any) {
  //   console.log("selection changed-------");
  //   // var selectedRows = this.api
  //   // console.log(selectedRows);
  // }
  // @ViewChild('formGrid') formGrid: AgGridAngular;

  // getSelectedRows(): void {
  //   const selectedNodes = this.formGrid.api.getSelectedNodes();
  //   //const selectedData = selectedNodes.map(node => node.data);
  //   const selectedData = selectedNodes.map(node => {
  //     if (node.groupData) {
  //       return { make: node.key, model: 'Group' };
  //     }
  //     return node.data;
  //   });
  //   const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }


  


}