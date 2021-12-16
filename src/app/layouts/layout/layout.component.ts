import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  ngOnInit(): void {
  }

}
