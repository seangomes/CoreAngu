import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    items: string[] = [];

    constructor(private appService: AppService) { }


    public GetAll() {

        this.appService.GetAll().subscribe(data => this.items);
    }
    
}
