import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as d3 from 'd3';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  innings: any;

  width: number;
  height: number;
  padding = { left: 50, right: 20, top: 20, bottom: 45 };
  svg: any
  x: any;
  y: any;
  g: any;
  rect: any;
  new: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private common: CommonService,
  ) {

  }
  ngOnInit(): void {
    this.innings = this.common.demoArray;
    this.svg = d3.select("#svg");

    this.width = this.svg.attr("width") - this.padding.left - this.padding.right;
    this.height = this.svg.attr("height") - this.padding.top - this.padding.bottom;
    

    this.g = this.svg.append("g").attr("transform", "translate(" + this.padding.left + "," + this.padding.top + ")");

    this.x = d3.scaleBand().domain(this.innings.map(function (d: any) { return d.innings }))
      .range([0, this.width]).padding(0.8);

    this.y = d3.scaleLinear().domain([0, 100])
      .range([this.height, 0]);

    this.svg.append("g").attr("transform", 'translate(' + this.padding.left + ',' + (this.padding.top + this.height) + ')').call(d3.axisBottom(this.x));

    this.svg.append("g").attr("transform", 'translate(' + this.padding.left + ',' + this.padding.top + ')').call(d3.axisLeft(this.y));



    this.rect = this.svg.append('g').attr("transform", "translate(" + this.padding.left + "," + this.padding.top + ")");
    this.onRectGraph();


    this.svg.append("text").attr("transform", 'translate(200,' + this.padding.top + ')').text((d: any) => {
      return this.innings[0].playername + "  comparision"
    })

    this.svg.append("text").attr("transform", "translate(240,495)").text("Innings")
    
    this.rect.selectAll("text").data(this.innings).enter().append("text").attr("x", (d: any) => {
      return this.x(d.innings)
    }).attr("y", (d: any) => {
      return this.y(d.innings)
    }).text((d:any) =>{
      return this.innings[0].runs
    })

    this.new = this.svg.append("g").attr("transform", "translate(10,200)")

    this.new.append("text").attr("transform", "rotate(-90)").text("score")

  }
  onRectGraph() {
    this.rect.selectAll("rect")
      .data(this.innings)
      .enter()
      .append("rect")
      .attr("x", (d: any) => {
        return this.x(d.innings)
      })
      .attr("y", (d: any) => {
        return this.y(d.runs)
      })
      .attr("width", this.x.bandwidth())
      .attr("height", (d: any) => {
        return this.height - this.y(d.runs)
      })
      .attr("fill", "red")
      .append("text")
      .attr("transform", (d: any) => {
        return "translate(" + this.x(d.innings) + "," + this.y(d.innings) + ")"
      }).text((d:any)=>{
        return d.innings.runs
      })
  }
  onNoClick() {
    this.dialogRef.close();
  }
}



