import { sep } from 'path';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-menu',
  template: `
    <nav class="navbar navbar-fixed-left navbar-minimal animate" [ngClass]="{'open': isClassVisible }" role="navigation">
		<div class="navbar-toggler animate" (click)="showCloseContent();">
			<span class="menu-icon"></span>
		</div>
		<ul class="navbar-menu animate">
			<li>
				<a href="#" [routerLink]="['/m']" class="animate">
					<span class="desc animate"> Home</span>
					<span class="glyphicon glyphicon-home"></span>
				</a>
			</li>
			<li>
				<a href="#" [routerLink]="['/s']" class="animate">
					<span class="desc animate"> Search</span>
					<span class="glyphicon glyphicon-search"></span>
				</a>
			</li>
			<li>
				<a href="#" [routerLink]="['/p']" class="animate">
					<span class="desc animate"> Profile </span>
					<span class="glyphicon glyphicon-user"></span>
				</a>
			</li>
			<li>
				<a href="#" [routerLink]="['/n']" class="animate">
					<span class="desc animate"> News </span>
					<span class="glyphicon glyphicon-send"></span>
				</a>
			</li>
      	<li>
				<a href="#"  (click)="closeSession()" class="animate">
					<span class="desc animate"> Logout </span>
					<span class="glyphicon glyphicon-log-out"></span>
				</a>
			</li>
		</ul>
	</nav>
  `
})
export class ngMenu {
   isClassVisible: boolean = false;

	 constructor(public router: Router) {
    }


  showCloseContent () {
    this.isClassVisible = !this.isClassVisible;
  }

	closeSession () {
		this.router.navigate(['/home']);
	}

} 

