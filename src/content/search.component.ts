import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: '/templates/content/search.html'
})
export class SearchComponent {

  allAvailableContent = [];

   constructor() {
     this.allAvailableContent = [];
   }

   createImdbId() {
     //Send to the node server
   }
} 