import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationsPageRoutingModule } from './configurations-routing.module';

import { ConfigurationsPage } from './configurations.page';
import { ProfilePageModule } from '../profile/profile.module';
import { AboutPageModule } from '../about/about.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationsPageRoutingModule, ProfilePageModule, AboutPageModule
  ],
  declarations: [ConfigurationsPage]
})
export class ConfigurationsPageModule {}
