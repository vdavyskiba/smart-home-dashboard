import Camera from '../../../../model/nestdatamodel/devices/camera/camera';
import LastEvent from '../../../../model/nestdatamodel/devices/camera/last-event';

export default class CameraImpl implements Camera {
  device_id: string;
  software_version: string;
  structure_id: string;
  where_id: string;
  name: string;
  name_long: string;
  is_online: boolean;
  is_streaming: boolean;
  is_audio_input_enabled: boolean;
  last_is_online_change: string;
  is_video_history_enabled: boolean;
  web_url: string;
  app_url: string;
  last_event: LastEvent;

}
