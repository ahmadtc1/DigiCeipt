import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent {
  name: string;
  content: string;
  nameIsEmpty: boolean = true;
  contentIsEmpty: boolean = true;
  isVisible: boolean = false;

  constructor() { }

}
