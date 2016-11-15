import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import Constants from '../../../constants/constants';
import LocationModel from '../../../model/weather/location-model';

@Injectable()
export default class LocationService {

  constructor(private $http: Http) {

  }

  getLocation(code: string): Observable<LocationModel> {

    let url = Constants.location_endpoint + code;

    return this.$http.get(url).map(res => res.json());

  }

}
