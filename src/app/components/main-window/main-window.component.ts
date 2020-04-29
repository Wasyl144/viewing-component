import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
    code:number;
    message:String;

}
