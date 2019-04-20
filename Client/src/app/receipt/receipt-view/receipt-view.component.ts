import { Component, OnInit } from '@angular/core';
import { Receipt } from '../receipt'
import { MatDialog } from '@angular/material';
import { SaveFormComponent } from '../save-form/save-form.component';

@Component({
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.css']
})
export class ReceiptViewComponent implements OnInit {
  receipts: Receipt[];
  filteredReceipts: Receipt[] = [];
  _listFilter: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SaveFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

  /*
  get listFilter(): string {
    return this._listFilter;
  }


  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredReceipts = this.listFilter ? this.performFilter(this.listFilter): this.receipts;
  }

  
  performFilter(filter: string): Receipt[] {    
  }
  */
}
