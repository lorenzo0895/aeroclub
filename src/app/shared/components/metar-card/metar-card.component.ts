import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-metar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metar-card.component.html',
  styleUrls: ['./metar-card.component.scss']
})
export class MetarCardComponent {

  @Input() data: any;
  expanded: boolean = false;

  localHour(hour: string) {
    return moment.utc(hour).local().format('DD/MM/YYYY - HH:SS')
  }
  
  utcHour(hour: string) {
    return moment(hour).format('DD/MM/YYYY - HH:SS');
  }

  onChangeExpanded() {
    this.expanded = !this.expanded;
  }
}
