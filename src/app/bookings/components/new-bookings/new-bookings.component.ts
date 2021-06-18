import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingsService } from '../../services/bookings.service';
@Component({
  selector: 'app-new-bookings',
  templateUrl: './new-bookings.component.html',
  styleUrls: ['./new-bookings.component.scss']
})
export class NewBookingsComponent implements OnInit {

  searchForm: FormGroup;
  allFlights: any;
  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.flights()
  }

  // Create reactive form
  createForm() {
    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      arrival: [''],
      date: [''],
      cost: ['']
    });
  }

  // Get all flights
  flights() {
    console.log(this.bookingsService.getFlights());
    this.allFlights = this.bookingsService.getFlights()
  }
}
