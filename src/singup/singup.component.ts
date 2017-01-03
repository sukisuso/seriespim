import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
   templateUrl: '/templates/singup.html'
})

export class SingupComponent {

    constructor(public router: Router) {
    }
} 