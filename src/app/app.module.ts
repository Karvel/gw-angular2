import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routedComponents as mainAppRoutedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		mainAppRoutedComponents,
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
