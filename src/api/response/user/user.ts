import {GET_DETAIL_TOKEN} from './../../endpoints/user';
import {axiosInstanceUser} from '../../config';
import {
  SIGN_IN,
  SIGN_UP,
  GET_USER_DETAIL,
  CHECK_PHONE,
  GET_OTP_CODE,
  RESET_PASSWORD,
  SEND_MAIL_WELCOME,
  CHANGE_PASSWORD,
  GET_USER_DETAIL_BY_USERNAME,
} from '../../endpoints/user';
export default class User {
  checkPhone(phone: string) {
    return axiosInstanceUser('application/json').get(CHECK_PHONE, {
      params: {phone},
    });
  }

  signUp(data: object) {
    return axiosInstanceUser('application/json').post(SIGN_UP, data);
  }

  signIn(email: string, phone: string, password: string) {
    return axiosInstanceUser('application/x-www-form-urlencoded').post(
      SIGN_IN,
      {
        email,
        phone,
        password,
      },
    );
  }

  getUserDetail(phone: string) {
    return axiosInstanceUser('application/json').get(GET_USER_DETAIL, {
      params: {phone},
    });
  }

  getUserDetailByUsername(username: string) {
    return axiosInstanceUser('application/json').get(
      GET_USER_DETAIL_BY_USERNAME.replace('${username}', username),
    );
  }

  getOTP(phone: string, type: string) {
    return axiosInstanceUser('application/json').get(GET_OTP_CODE, {
      params: {phone, type},
    });
  }

  resetPassword(phone: string, otp: string, new_password: string) {
    return axiosInstanceUser('application/x-www-form-urlencoded').post(
      RESET_PASSWORD,
      {
        phone,
        otp,
        new_password,
      },
    );
  }

  changePassword(phone: string, old_password: string, new_password: string) {
    return axiosInstanceUser('application/x-www-form-urlencoded').post(
      CHANGE_PASSWORD,
      {
        phone,
        old_password,
        new_password,
      },
    );
  }
  
  sendMailWelcome(phone: string) {
    return axiosInstanceUser('application/json').get(SEND_MAIL_WELCOME, {
      params: {phone},
    });
  }
}
