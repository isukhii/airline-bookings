import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TypeaheadOrder, TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() flights: any;
  @Input() searchForm: FormGroup;
  departures: string[];
  arrivals: string[];
  minValue: number = 0;
  maxValue: number = 0;
  options: Options = {
    floor: this.minValue,
    ceil: this.maxValue,
    // step: 10,
    // showTicks: true
  };


  constructor() { }

  ngOnInit(): void {
    this.departures = this.flights.map(res => res.departure);
    this.departures = this.departures.filter((v, i, a) => a.indexOf(v) === i);
    this.arrivals = this.flights.map(res => res.arrival);
    this.arrivals = this.arrivals.filter((v, i, a) => a.indexOf(v) === i);
    for (let i = 1, len = this.flights.length; i < len; i++) {
      let v = this.flights[i].cost;
      this.minValue = (v < this.minValue) ? v : this.minValue;
      this.maxValue = (v > this.maxValue) ? v : this.maxValue;
    }
    this.options = {
      floor: this.minValue,
      ceil: this.maxValue,
    };
  }

  // Search
  search() {

  }
}
