import {navAuth} from 'src/screens/AuthScreen/nav';
import {navIntro} from 'src/screens/IntroScreen/nav';
import {navProfile} from 'src/screens/MainScreen/Profile/nav';
import {navMain} from 'src/screens/MainScreen/nav';
import {navSystem} from 'src/screens/SystemScreen/nav';
import {navTest} from 'src/screens/public/Test/nav';

import QRCODE from 'src/screens/public/qr/QRCode';

export const authRoutes = {
  ...navAuth,
  ...navIntro,
};
export const mainRoutes = {
  ...navSystem,
  ...navMain,
  ...navTest,
  QRCODE,
};
export const profileRoutes = {
  ...navProfile,
};
