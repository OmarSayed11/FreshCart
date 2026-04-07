import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing-module';
import { HrComponent } from '../hr/hr.component';
import { SalesComponent } from '../sales/sales.component';
import { MarketingComponent } from '../marketing/marketing.component';
import { MainPageComponent } from '../main-page/main-page.component';

@NgModule({
  declarations: [HrComponent, SalesComponent, MarketingComponent, MainPageComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
