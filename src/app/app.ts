import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //pass data to template
  data = "Sheikh Forid Ahmed Shanto";

  //Data change
  name = "Sanvi Rahman";
  onChange() {
    this.name = "Shanta Islam Oboni";
  }

  //pass data to template on click
  isDark = true;
  toggleTheme() {
    this.isDark = !this.isDark;
  }

}
