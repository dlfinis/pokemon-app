import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'test', component: TestComponent }
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
