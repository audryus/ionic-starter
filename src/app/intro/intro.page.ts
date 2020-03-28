import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config/config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  providers: [ConfigService]
})
export class IntroPage implements OnInit {

  constructor(public configService:ConfigService, private route: Router) { }

  ngOnInit() {
    let config = this.configService.getConfigData();
    if (config == null) {
      this.configService.setConfigData(false);
    } else {
      if (!config.show_slide) {
        this.route.navigate(['/tabs']);
      }
    }
  }

}
