import Eta from '../../../model/nestdatamodel/structure/subtypes/eta'; 

export default class EtaImpl implements Eta {
  trip_id:string;
  estimated_arrival_window_begin:Date;
  estimated_arrival_window_end:Date;
}
