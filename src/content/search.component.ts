import { Component, OnInit } from '@angular/core';
import { ContentService } from '../service/content.service';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';
import { TruncatePipe } from '../headers/truncate.pipe';

@Component({
  selector: 'search',
  providers: [ContentService],
  templateUrl: '/templates/content/search.html'
})
export class SearchComponent implements OnInit {

   allAvailableContent: Array<Object> = [];
   newImbdId: String = undefined;
   nameToFind: String = '';
   numberToShow: Number = 20;

   constructor (private contentService: ContentService,  public router: Router, private gS: GlobalService) {}

   ngOnInit() {
       this.contentService.get().subscribe((content: Array<Object>) => {
          this.allAvailableContent = content;
       });
   }

   createContent () {
     if (this.newImbdId !== undefined && this.newImbdId !== '') {
       this.contentService.create({imbdid: this.newImbdId}).subscribe((content) => {
         this.allAvailableContent.push(content);
       });
     }  
   }

   find ($event) {
      this.contentService.get(this.nameToFind).subscribe((content: Array<Object>) => {
        this.allAvailableContent = content;
      });
   }

   seeContent (index) {
     this.gS.setContent(this.allAvailableContent[index]);
     this.router.navigate(['c']);
   }
} 