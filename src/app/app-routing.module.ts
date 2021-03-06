import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent } from './exercises/exercises.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path      : 'exercises',
		component : ExercisesComponent,
	},
	{
		path      : '',
		component : LoginComponent,
	},
	{
		path       : '**',
		redirectTo : '',
		pathMatch  : 'full',
	},
];

@NgModule({
	imports : [ RouterModule.forRoot(routes) ],
	exports : [ RouterModule ]
})
export class AppRoutingModule { }

export const routedComponents = [
	ExercisesComponent,
	LoginComponent,
];
