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

  name=false;

  onChange(){
    this.name=!this.name;
  }

  isDark=false;
  toggleTheme(){
    this.isDark =! this.isDark;
  }

}
