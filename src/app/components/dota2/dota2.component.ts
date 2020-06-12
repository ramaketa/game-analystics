import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Team} from "../../shared/team";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {debounceTime, map} from "rxjs/operators";
import {NbToastrService} from "@nebular/theme";
import {positionService} from "@ng-bootstrap/ng-bootstrap/util/positioning";

@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.scss']
})
export class Dota2Component implements OnInit {

  teams: Team[];
  public model: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private toastrService: NbToastrService,
  ) {
  }

  ngOnInit(): void {
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
  }

}
