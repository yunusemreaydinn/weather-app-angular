import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() citySearch = new EventEmitter<string>();
  cityName: string = '';

  search() {
    this.citySearch.emit(this.cityName);
    this.cityName = '';
  }
}
