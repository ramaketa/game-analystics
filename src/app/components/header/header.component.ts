import { Component, OnInit } from '@angular/core';
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkTheme = true;

  constructor(
    private themeService: NbThemeService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('theme') === 'dark') {
      this.changeTheme(true);
      this.darkTheme = true;
    } else {
      this.changeTheme(false);
      this.darkTheme = false;
    }
  }

  changeTheme(darkTheme) {
    if (darkTheme) {
      localStorage.setItem('theme', 'dark');
      this.themeService.changeTheme('dark');
    } else {
      localStorage.setItem('theme', 'default');
      this.themeService.changeTheme('default');
    }
  }
}
