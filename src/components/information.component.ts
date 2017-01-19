import { Component, Input } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: '/templates/components/information.html'
})

export class InfoComponent {
  @Input() content: Object;


} 