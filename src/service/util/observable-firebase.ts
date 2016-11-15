import 'firebase';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';


export function observable<T> (source: Firebase): Observable<T> {

  return Observable.create((observer: Observer<T>): Function => {

    let value = (snapshot: FirebaseDataSnapshot) => observer.next(snapshot.val());

    source.on('value', value);

    return () => source.off('value', value);

  });

}
