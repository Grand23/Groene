import { Component, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { EducationComponent } from "./components/education/education.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, SkillsComponent, EducationComponent, ContactComponent, FooterComponent, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnchange (changes : SimpleChanges){
    console.log(changes);

  }
  ngOnInit(){
    console.log("initialized");
    
  }

}
