import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit{
  name: string;
  content: string;
  isNameEmpty: boolean = true;
  isContentEmpty: boolean = true;
  isVisible: boolean = false;

  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }

  constructor() { 
    this.name = "";
    this.content = "";
  }

  ngOnInit(): void {

  }
}
