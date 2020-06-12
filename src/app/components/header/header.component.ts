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
  }

  changeTheme(darkTheme) {
    if (darkTheme) {
      this.themeService.changeTheme('dark');
    } else {
      this.themeService.changeTheme('default');
    }
  }
}
