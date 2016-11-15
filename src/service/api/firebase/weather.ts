const Firebase = require('firebase');
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import Constants from '../../../constants/constants';
import {observable} from '../../util/observable-firebase';
import LocationModel from '../../../model/weather/location-model';
import {Observer} from 'rxjs/Observer';
import WeatherModel from '../../../model/weather/weater-model';
import NestStore from '../nest/nest-store';
import Structure from '../../../model/nestdatamodel/structures/structure';
import LocationService from '../location/location';

@Injectable()
export default class WeatherService {

  private static source: Firebase;

  private static city: string;

  private static initSource(): Firebase {

    return new Firebase(Constants.weather_firebase_endpoint);
  }

  constructor(private location: LocationService, private nestapi: NestStore) {

    WeatherService.source = WeatherService.source || WeatherService.initSource();

  }

  getCurrent(structureId: string): Observable<WeatherModel> {

    return Observable.create((observer: Observer<WeatherModel>): Function => {

      let subscription1: Subscription;
      let subscription2: Subscription;

      let subscribe = (): void => {

        let src: Firebase = WeatherService.source.child(WeatherService.city).child('currently');

        subscription1 =  observable(src).subscribe((weather: WeatherModel) => observer.next(weather));

      };

      let unsubscribe = (): void => {
        if (subscription1) {
          subscription1.unsubscribe();
        }
        if (subscription2) {
          subscription2.unsubscribe();
        }
      };

      if (WeatherService.city) {

        subscribe();

      } else {

        subscription2 = this.nestapi.getStructure(structureId).subscribe((structure: Structure): void  => {

          if (!WeatherService.city) {

            this.location
              .getLocation(structure.postal_code)
              .map((location: LocationModel): string => location.city.toLowerCase().split(' ').join(''))
              .toPromise()
              .then((city: string): void => {

                WeatherService.city = city;

                subscribe();

                subscription2.unsubscribe();

              });

          } else {

            subscription2.unsubscribe();

          }
        });

      }

      return unsubscribe;

    });
  }



}
