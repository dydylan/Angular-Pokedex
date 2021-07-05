import { Component, OnInit } from '@angular/core';

import { dataGenerations } from './mock-generations';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css'],
})
export class GenerationsComponent implements OnInit {
  generations = dataGenerations;

  constructor() {}

  ngOnInit(): void {}
}
