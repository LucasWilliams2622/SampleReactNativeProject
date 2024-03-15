import {navHome} from './Home/nav';
import {navProfile} from './Profile/nav';
import {navMap} from './Map/nav';

export const navMain = {
  ...navHome,
  ...navProfile,
  ...navMap,
};
