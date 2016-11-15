import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

const template = require('./status.html');
const styles = require('./status.css');

import NestStoreService from '../../../service/api/nest/nest-store';
import {NgClass} from 'angular2/common';


@Component({
  selector: 'status',
  template: template,
  styles: [styles],
  directives: [NgClass],
  providers: [NestStoreService]
})

export default class StatusComponent implements OnInit {

  model: Observable<string>;

  constructor(private source: NestStoreService) {}

  ngOnInit(): void {

    this.model = this.source.getStatus().map(val => val ? 'online' : 'offline');

  }

}
