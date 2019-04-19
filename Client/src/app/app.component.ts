import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'DigiCeipt';

  constructor(private router: Router) {
  }

  onUploadClick(): void {
    this.router.navigate(['/upload']);
  }
}
