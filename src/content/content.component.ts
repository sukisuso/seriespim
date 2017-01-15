import { Component, OnInit } from '@angular/core';
import { ContentService } from '../service/content.service';
import { GlobalService } from '../service/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'content',
  providers: [ContentService],
  templateUrl: '/templates/content/content.html'
})

export class ContentComponent implements OnInit{
    content: Object;
    selectedArea: String = 'info';

    constructor (private contentService: ContentService,  private gS: GlobalService) {
        this.content = this.gS.getContent();
    }

    ngOnInit() {
     
   }

   selectArea (selection: String) {
       this.selectedArea = selection;
   }

} 