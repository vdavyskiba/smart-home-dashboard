interface WeatherModel {

  apparentTemperature: number
  cloudCover: number
  dewPoint: number
  humidity: number
  icon: string
  nearestStormBearing:  number
  nearestStormDistance: number
  ozone: number
  precipIntensity: number
  precipProbability: number
  pressure: number
  summary: string
  temperature: number
  time: number
  visibility: number
  windBearing: number
  windSpeed: number

}

export default WeatherModel;
