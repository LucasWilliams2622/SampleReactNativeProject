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
type MosStackParamList = {
  Mos_RecruimentHome: undefined;
  Mos_RecruitmentCreatePost: undefined;
  Mos_RecruitmentNotification: undefined;
  Mos_RecruitmentListApplicant: undefined;
  Mos_RecruitmentDetailPost: undefined;
  Mos_RecruitmentDetaiApplicant: undefined;
  Mos_RecruitmentEditPost: undefined;
  qlCTV_DSCTV: undefined;
  qlCTV_AddCTV: undefined;
  qlCTV_CaiDatHoaHong: undefined;
  QlCTV_AddCollaborator2: undefined;
  QlCTV_DetailCollaborator: undefined;
  QlCTV_DetailOrder: undefined;
  QlCTV_SalesHistory: undefined;
  QlCTV_EditCollaborator: undefined;
  SP_DSSanPham: undefined;
  SP_AddSanPham: undefined;
  SP_AddNewStep2: undefined;
  SP_ThongTinSanPham: undefined;
  Mos_Cuisine_Menu: undefined;
  Mos_Cuisine_AddMenu: undefined;
  Mos_Cuisine_DetailDish: undefined;
  Mos_Cuisine_EditDish: undefined;
  Mos_Cuisine_Quantitative: undefined;
};
type LinkStackParamList = {};
type LandStackParamList = {
  Land_DetailPost: undefined;
  Land_Search: undefined;
  Land_PostBuyHouse_EnterLocation: undefined;
  Land_PostBuyHouse_EnterDetailHouse: undefined;
  Land_PostBuyHouse_EnterDetailPost: undefined;
  Land_PostBuyHouse_EnterContact: undefined;
  Land_PostBuyHouse_EnterTypePost: undefined;
  Land_PostLandProject_EnterLocation: undefined;
  Land_PostLandProject_EnterDetailHouse: undefined;
  Land_PostLandProject_EnterDetailPost: undefined;
  Land_PostLandProject_EnterContact: undefined;
  Land_PostLandProject_EnterTypePost: undefined;
  Land_PostRentHouse_EnterLocation: undefined;
  Land_PostRentHouse_EnterDetailHouse: undefined;
  Land_PostRentHouse_EnterDetailPost: undefined;
  Land_PostRentHouse_EnterContact: undefined;
  Land_PostRentHouse_EnterTypePost: undefined;
  Land_PostSellHouse_EnterLocation: undefined;
  Land_PostSellHouse_EnterDetailHouse: undefined;
  Land_PostSellHouse_EnterDetailPost: undefined;
  Land_PostSellHouse_EnterContact: undefined;
  Land_PostSellHouse_EnterTypePost: undefined;
  Land_Home: undefined;
  Land_Profile: undefined;
  Land_ChangePassword: undefined;
  Land_ChangePIN: undefined;
  Land_MyPost: undefined;
  Land_PendingPost: undefined;
};
type MainStackParamList = {
  Land_Home: undefined;
  HomeScreen: undefined;
  HomeLink: undefined;
  HomeMos: undefined;
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
export type Mos_RecruitmentCreatePostProp = NativeStackScreenProps<
  MosStackParamList,
  'Mos_RecruitmentCreatePost'
>;
export type AuthenScreenProp = NativeStackScreenProps<AuthenStackParamList>;
export type MosScreenProp = NativeStackScreenProps<MosStackParamList>;
export type LinkScreenProp = NativeStackScreenProps<LinkStackParamList>;
export type LandScreenProp = NativeStackScreenProps<LandStackParamList>;
export type MainScreenProp = NativeStackScreenProps<MainStackParamList> &
  MosScreenProp &
  LandScreenProp &
  LinkScreenProp;
export type RootStackParamList = AuthenStackParamList & MainStackParamList & {};
export type RootScreenProp = NativeStackScreenProps<RootStackParamList>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootScreenProps extends RootScreenProp {}
    interface MainScreenProps extends MainScreenProp {}
    interface AuthScreenProps extends AuthenScreenProp {}
    interface MosScreenProps extends MosScreenProp {}
    interface LandScreenProps extends LandScreenProp {}
    interface LinkScreenProps extends LinkScreenProp {}
  }
}
