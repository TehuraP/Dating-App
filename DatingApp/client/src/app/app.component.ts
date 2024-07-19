import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('https://localhost:2020/api/users').subscribe({
      next: (response: any) => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed")
    })
  }
}
