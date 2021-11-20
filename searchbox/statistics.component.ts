import { Component, OnInit, ViewEncapsulation,ViewChild,ElementRef } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class StatisticsComponent implements OnInit {

  constructor(private common: CommonService) { }
  

  ngOnInit(): void {

  }
  searchContainer: any = [];
  finalContainer: any = [];
  instance: any;
  contains: any;
  fromdate: any;
  todate: any;
  status: any;
  tags: any;
  remove: boolean = true


  searchRequirements: any = [
    { label: 'contains', description: 'text content to be searched', value: "" },
    { label: 'daterange', description: 'search task between selected date range', value1: "", value2: '' },
    { label: 'status', description: 'status for particular task', value: "" },
    { label: 'tags', description: 'search tags', value: "" },
  ]
  @ViewChild('inputcontains') inputcontains: ElementRef
  @ViewChild('inputfrom') inputfrom: ElementRef
  @ViewChild('inputto') inputto: ElementRef
  @ViewChild('inputstatus') inputstatus: ElementRef
  @ViewChild('inputtags') inputtags: ElementRef


  selectedOption() {

    console.log("selected option----");
    console.log(typeof this.instance)
    if (typeof this.instance != "undefined" && this.instance != null) {
      if (this.instance.label === "contains") {
        this.searchContainer[0] = this.instance;
        setTimeout(() => {
          this.inputcontains.nativeElement.focus();
        }, 100);

      } else if (this.instance.label === "tags") {
        this.searchContainer[0] = this.instance;

        setTimeout(() => {
          this.inputtags.nativeElement.focus();
        }, 100);

      } else if (this.instance.label === "status") {
        this.searchContainer[0] = this.instance;
        setTimeout(() => {
          this.inputstatus.nativeElement.focus();
        }, 100);


      } else if (this.instance.label === "daterange") {
        this.searchContainer[0] = this.instance;
        setTimeout(() => {
          this.inputfrom.nativeElement.focus();
        }, 100);

      }

    }

    console.log(this.instance, this.searchContainer)
  }
  blur() {
    console.log("blurred")
  }
  focus() {
    console.log("focussed")
  }
  inputfocus() {
    console.log("inputfocussed")
  }

  onEnter() {

    console.log("enter pressed-----")
    console.log(this.searchContainer[0].value)
    console.log(this.contains)

    if (this.searchContainer[0] != null) {

      if (this.searchContainer[0].label === "contains" && this.contains != null) {

        this.searchContainer[0].value = this.contains;
        this.finalContainer.push(this.searchContainer[0]);
        this.finalContainer = JSON.parse(JSON.stringify(this.finalContainer));


      } else if (this.searchContainer[0].label === "daterange" && this.fromdate != null
        && this.todate != null) {

        this.searchContainer[0].value1 = this.fromdate;
        this.searchContainer[0].value2 = this.todate;
        let result = this.finalContainer.filter((x: any) => x.label === 'daterange');
        console.log("result", result)
        if (result.length) {
          this.finalContainer.map((x: any) => {
            if (x.label === 'daterange') {
              x.value1 = this.fromdate;
              x.value2 = this.todate;
            }
          })
        } else {
          this.finalContainer.push(this.searchContainer[0]);
          this.finalContainer = JSON.parse(JSON.stringify(this.finalContainer))
        }
      } else if (this.searchContainer[0].label === "status" && this.status != null) {
        this.searchContainer[0].value = this.status;
        this.finalContainer.push(this.searchContainer[0]);
        this.finalContainer = JSON.parse(JSON.stringify(this.finalContainer));

      } else if (this.searchContainer[0].label === "tags" && this.tags != null) {
        this.searchContainer[0].value = this.tags;
        this.finalContainer.push(this.searchContainer[0]);
        this.finalContainer = JSON.parse(JSON.stringify(this.finalContainer));

      }
      this.searchContainer.splice(0, 1);
      this.instance = null
      console.log("finalcontainer", this.finalContainer);
      console.log("searchcontainer", this.searchContainer)

      this.contains = null;
      this.fromdate = null;
      this.todate = null;
      this.status = null;
      this.tags = null;
    } else {
      console.log("else")
    }

  }

  removeChip_(chip_: any) {
    const num = this.finalContainer.indexOf(chip_)
    this.finalContainer.splice(num, 1)
  }

}
