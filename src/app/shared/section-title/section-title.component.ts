import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {

  @Input()
  title: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
