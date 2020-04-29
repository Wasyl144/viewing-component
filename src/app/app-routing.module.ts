import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWindowComponent } from './components/main-window/main-window.component';



const routes: Routes = [
  // { path: 'main', component: MainWindowComponent },
  // { path: '',   redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
