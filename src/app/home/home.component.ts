import { Component, OnInit } from '@angular/core';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dripFeedProcesses: ROUTE[] = [
    {
      icon: '',
      route: 'process/likes',
      title: 'Like Processes',
    },
    {
      icon: '',
      route: 'process/followers',
      title: 'Followers Processes',
    },
    {
      icon: '',
      route: 'blacklist',
      title: 'Manage Blacklists',
    }
  ];

  public backendSettings: ROUTE[] = [
    {
      icon: '',
      route: 'settings/api',
      title: 'Drip-Feed API Settings',
    },
    {
      icon: '',
      route: 'settings/services',
      title: 'Services Settings',
    },
    {
      icon: '',
      route: 'user',
      title: 'User & Credits',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
