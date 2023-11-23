import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-roott',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  message: any; 
    constructor(private apiService: ApiService) { }; 
    ngOnInit() { 
        this.apiService.getMessage().subscribe(data => { 
            this.message = data; 
        }); 
    } 
  
}
