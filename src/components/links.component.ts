import { Component, Input } from '@angular/core';

@Component({
  selector: 'links',
  templateUrl: '/templates/components/links.html'
})

export class LinksComponent {
  @Input() series: Boolean;
  @Input() imdnId: String;
  arrayOfLiks: Array<Object>;

} 