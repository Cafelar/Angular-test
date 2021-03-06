import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service'
import { visibility, expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  selectLeader: Leader;
  
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
      this.leaderService.getLeader().subscribe(leaders => this.leaders = leaders);
  }

  onSelect(leader: Leader) {
    this.selectLeader = leader;
  }

}
