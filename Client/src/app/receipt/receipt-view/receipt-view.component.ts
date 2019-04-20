import { Component, OnInit } from '@angular/core';
import { Receipt } from '../receipt'
@Component({
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.css']
})
export class ReceiptViewComponent implements OnInit {
  receipts: Receipt[];
  filteredReceipts: Receipt[] = [];

  
  constructor() { }

  ngOnInit() {
  }
}
