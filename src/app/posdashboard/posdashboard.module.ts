import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POSDashboardRoutingModule } from './posdashboard-routing.module';
import { POSDashboardComponent } from './posdashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    POSDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    POSDashboardRoutingModule,
    HttpClientModule
  ]
})
export class POSDashboardModule { }
