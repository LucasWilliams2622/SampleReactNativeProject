import {navAuth} from 'src/screens/AuthScreen/nav';
import {navProfile} from 'src/screens/MainScreen/ProfileScreen/nav';
import {navMain} from 'src/screens/MainScreen/nav';
import {navSystem} from 'src/screens/SystemScreen/nav';
import QRCODE from 'src/screens/public/qr/QRCode';

export const authRoutes = {
  ...navAuth,
  // ...navLink,
};
export const mainRoutes = {
  ...navSystem,
  ...navMain,
  QRCODE,
};
export const profileRoutes = {
  ...navProfile,
};
