import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxSliderModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule,
    BsDatepickerModule,
    NgxSliderModule
  ]
})
export class CoreModule { }
