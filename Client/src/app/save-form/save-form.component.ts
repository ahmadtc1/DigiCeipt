import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {
  receiptName: string;
  receiptContent: string;
  nameIsEmpty: boolean = true;
  contentIsEmpty: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
