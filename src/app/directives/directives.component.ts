import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value;
  constructor() { }

  ngOnInit() {
  }

}
