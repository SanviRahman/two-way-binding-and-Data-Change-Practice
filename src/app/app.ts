import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data="Sheikh Forid Ahmed Shanto";

  name="Sanvi Rahman";

  onChange(){
    this.name="Shanta Islam Oboni";
  }
}
