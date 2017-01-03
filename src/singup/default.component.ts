import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'default',
  templateUrl: '/templates/login.html'
})

export class DefaultComponent {

    constructor(public router: Router) {
    }

     loginAction() {
      this.router.navigate(['m']);
    }
} 