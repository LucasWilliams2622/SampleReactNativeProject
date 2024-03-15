import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AuthenStackParamList = {
  Login: undefined;
  EnterPassword: {phone: string};
  EnterInfo: {phone: string; email: string; code?: string};
  EnterEmail: {phone: string};
  EnterCode: {phone: string; email: string};
  ChangePassword: undefined;
  ConfirmOTP: undefined;
  ForgotPassword: undefined;
};
type MainStackParamList = {
  HomeScreen: undefined;
  FoodNew: undefined;
  CateFood: undefined;
  ListFoodCate: undefined;
  test: undefined;
  ListStore: undefined;
  DetailFoodStore: undefined;
  DetailFoodItem: undefined;
  ListProductNew: undefined;
  DetailProductNew: undefined;
  DetailProductStore: undefined;
  HomeProduct: undefined;
};
export type ChangePasswordProp = NativeStackScreenProps<
  AuthenStackParamList,
  'ChangePassword'
>;
export type EnterInfoProp = NativeStackScreenProps<
  AuthenStackParamList,
  'EnterInfo'
>;
export type EnterEmailProp = NativeStackScreenProps<
  AuthenStackParamList,
  'EnterEmail'
>;
export type EnterCodeProp = NativeStackScreenProps<
  AuthenStackParamList,
  'EnterCode'
>;
export type EnterPasswordProp = NativeStackScreenProps<
  RootStackParamList,
  'EnterPassword'
>;

export type AuthenScreenProp = NativeStackScreenProps<AuthenStackParamList>;
export type MainScreenProp = NativeStackScreenProps<MainStackParamList> ;
export type RootStackParamList = AuthenStackParamList & MainStackParamList & {};
export type RootScreenProp = NativeStackScreenProps<RootStackParamList>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootScreenProps extends RootScreenProp {}
    interface MainScreenProps extends MainScreenProp {}
    interface AuthScreenProps extends AuthenScreenProp {}
  }
}
