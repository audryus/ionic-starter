import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { ProfilePage } from '../profile/profile.page';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage implements OnInit {

  configurationRoot = ProfilePage;

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  goTo(where:string) {
    switch (where) {
      case "profile":
        this.configurationRoot = ProfilePage;
        break;
      case "about":
        this.configurationRoot = AboutPage;
        break;
    }
    this.menu.close();
  }

}
