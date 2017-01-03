import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
  <ng-menu></ng-menu>

<div class="container">
    <div class="row col-md-12">
        <div class="applicationcontent">
             <h2> Profile</h2>
        </div>
    </div>
</div>

<ng-footer></ng-footer>
  `
})
export class ProfileComponent {} 