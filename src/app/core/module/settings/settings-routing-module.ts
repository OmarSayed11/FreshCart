import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { MarketingComponent } from '../marketing/marketing.component';
import { SalesComponent } from '../sales/sales.component';
import { HrComponent } from '../hr/hr.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      { path: 'hr', component: HrComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'marketing', component: MarketingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
