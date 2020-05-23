import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Team } from "../../shared/team";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {debounceTime, map} from "rxjs/operators";

@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.scss']
})
export class Dota2Component implements OnInit {

  teams: Team[];
  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.teams.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  formatter = (x: {name: string}) => x.name;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getAllteams()
      .subscribe(data =>{
        this.teams = data;
    });
  }

}
