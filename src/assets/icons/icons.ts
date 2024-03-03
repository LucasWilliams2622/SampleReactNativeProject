import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from 'src/styles/colors';

export const icons = {
  home: Entypo.getImageSourceSync('home', 20),
  homeo: AntDesign.getImageSourceSync('home', 20),

  star: FontAwesome.getImageSourceSync('star', 20, '#fdcd27'),
  staro: FontAwesome.getImageSourceSync('star-o', 20, 'gray'),
  halfStar: FontAwesome.getImageSourceSync('star-half', 20, '#fdcd27'),
  calendar: Ionicons.getImageSourceSync('calendar', 20, 'black'),
  down: Entypo.getImageSourceSync('chevron-down', 20, 'black'),
  right: Entypo.getImageSourceSync('chevron-right', 20, 'black'),
  next: Ionicons.getImageSourceSync('arrow-forward', 20, 'black'),
  message: AntDesign.getImageSourceSync('message1'),
  review: MaterialIcons.getImageSourceSync('rate-review', 20, 'black'),
  like1: AntDesign.getImageSourceSync('like1', 20, 'black'),
  car: Ionicons.getImageSourceSync('car-sport', 20, 'black'),
  car2: Ionicons.getImageSourceSync('car', 20, 'black'),
  closecircle: AntDesign.getImageSourceSync('closecircle', 20, 'black'),
  dislike1: AntDesign.getImageSourceSync('dislike1', 20, 'black'),
  lightning: MaterialCommunityIcons.getImageSourceSync(
    'lightning-bolt',
    20,
    'black',
  ),
  info: Entypo.getImageSourceSync('info-with-circle', 20),
  history: MaterialIcons.getImageSourceSync('history', 20),
  notification: Ionicons.getImageSourceSync('notifications', 20, 'black'),
  notificationo: Ionicons.getImageSourceSync('notifications-outline', 20, 'black'),

  user: FontAwesome.getImageSourceSync('user', 20, 'black'),
  usero: FontAwesome.getImageSourceSync('user-o', 20, 'black'),


};
