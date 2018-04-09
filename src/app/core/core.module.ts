import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from './../shared/shared.module';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    ShellComponent,
    TopBarComponent,
    MainContentComponent
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
