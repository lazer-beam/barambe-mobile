import DeviceInfo from 'react-native-device-info'

export default {
  domain: DeviceInfo.getManufacturer() === 'Genymotion' ? 'http://10.0.3.2:1337' : 'http://10.0.2.2:1337'
}
