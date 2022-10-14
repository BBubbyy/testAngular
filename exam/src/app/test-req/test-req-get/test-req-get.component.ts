import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Req } from './test-req-get';

@Component({
  selector: 'app-test-req-get',
  templateUrl: './test-req-get.component.html',
  styleUrls: ['./test-req-get.component.css']
})
export class TestReqGetComponent implements OnInit {
  reqlist: Req[] = [];
  filterText: string = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Req[]>('https://restcountries.com/v3.1/all').subscribe(response => {
      this.reqlist = response;
      console.log('response', response);
      console.log(this.filterText);
    });

  }

}
