import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
const template = require('./dashboard.html');
const styles = require('./dashboard.css');

import StructureComponent from '../../../components/structure/structure';
import Structure from '../../../../model/nestdatamodel/structures/structure';
import NestStoreService from '../../../../service/api/nest/nest-store';
import StatusComponent from '../../../components/status/status';


@Component({
  selector: 'dashboard',
  template: template,
  styles: [ styles ],
  providers: [NestStoreService],
  directives: [
    StatusComponent,
    StructureComponent
  ]
})

export default class Dashboard implements OnInit {

  structures: Observable<Structure[]>;

  constructor(private service: NestStoreService) {}

  ngOnInit(): void {

    this.structures = this.service.getStructures();

  }

}
