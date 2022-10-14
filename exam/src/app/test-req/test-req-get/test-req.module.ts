import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestReqGetComponent } from './test-req-get.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filter.pipe';



@NgModule({
  declarations: [
    TestReqGetComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatListModule,
    FormsModule,
  ],
  exports: [
    TestReqGetComponent,
    FilterPipe
  ]
})
export class TestReqModule { }
