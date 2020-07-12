import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Team} from "../../shared/team";
import {NbToastrService} from "@nebular/theme";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.scss']
})
export class Dota2Component implements OnInit {

  teams: Team[];
  dark: boolean;
  gameCount: number;
  firstTeamName: string;
  secondTeamName: string;
  firstTeam: Team;
  secondTeam: Team;
  selectedTeam: Team;
  isLoading = true;
  filteredNgModelOptions$: Observable<Team[]>;

  constructor(
    private apiService: ApiService,
    private toastrService: NbToastrService,
  ) {
  }

  ngOnInit(): void {
    this.dark = Boolean(localStorage.getItem('theme') === 'dark');

    this.apiService.getAllteams()
      .subscribe(data => {
          this.teams = data;
          this.isLoading = false;
          this.toastrService.success('SUCCESS', 'GET TEAMS LIST');
        },
        error => {
          this.toastrService.warning('ERROR', 'GET TEAMS LIST');
          this.isLoading = false;
        });
    this.filteredNgModelOptions$ = of(this.teams);
  }

  private filter(value): Team[] {
    if (typeof value !== "string") {
      // this.onModelChange(value);
    } else {
      const filterValue = value.toLowerCase();
      return this.teams.filter(optionValue => optionValue.name.toLowerCase().includes(filterValue));
    }
  }

  onModelChange(value) {
    this.filteredNgModelOptions$ = of(this.filter(value));
  }

  setTeam(teamNumber, teamName) {
    for (const team of this.teams) {
      if (team.name === teamName) {
        this.selectedTeam = team;
        break;
      }
    }
    teamNumber === 'firstTeam' ? this.firstTeam = this.selectedTeam : this.secondTeam = this.selectedTeam;
    this.filteredNgModelOptions$ = of(this.teams);
  }
}
