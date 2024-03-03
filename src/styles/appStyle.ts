import {StyleSheet, Dimensions} from 'react-native';
import {colors} from './colors';
import {fonts} from 'src/assets/fonts/fonts';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {squareImageSize} from 'src/utils';
export const isTablet = DeviceInfo.isTablet();
export const windowWidth = isTablet
  ? Dimensions.get('window').height
  : Dimensions.get('window').width;

export const windowHeight = isTablet
  ? Dimensions.get('window').width
  : Dimensions.get('window').height;

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerStatusBar: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: StatusBar.currentHeight || 0,
  },
  mainContent: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 14,
    marginTop: 4,
    paddingTop: 20,
  },
  main: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: isTablet ? '20%' : 14,
    marginTop: 4,
    paddingTop: isTablet ? 0 : 20,
  },
  mainTransparent: {
    flex: 1,
    paddingHorizontal: isTablet ? '20%' : 14,
    marginTop: 4,
    paddingTop: 20,
  },

  header: {
    backgroundColor: colors.background,
    marginHorizontal: 24,
    marginTop: 16,
  },
  //======================| BOX |======================
  boxContent: {
    backgroundColor: colors.background,
    flex: 1,
    marginHorizontal: 32,
  },
  boxCamera: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    paddingVertical: 14,
    paddingHorizontal: 22,
    backgroundColor: colors.background,
  },
  boxItem: {
    backgroundColor: colors.background,
    flex: 1,
    marginVertical: 24,
  },
  boxCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  boxCenterItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxInputSmall: {
    padding: 10,
    borderTopLeftRadius: 8,
    paddingVertical: 0,
    borderBottomLeftRadius: 8,
    height: isTablet ? 50 : 40,
    fontSize: RFValue(14, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,

    width: '65%',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxInput: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 16,
    width: '100%',
    height: 54,
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.Regular,
  },
  boxInputBig: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 16,
    width: '100%',
    height: 500,
    alignItems: 'flex-start',
    textAlign: 'start',
    fontFamily: fonts.Regular,
  },
  //===================| DROPDOWN |================
  dropdown: {
    width: '65%',
    borderColor: '#E4E4E4',
    backgroundColor: colors.bgLabel,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingVertical: 8,
    fontSize: 14,
    height: 40,
    paddingRight: 12,
    fontFamily: fonts.Regular,
  },
  placeholderStyle: {
    fontSize: RFValue(14, windowHeight),
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
    color: colors.placeholder,
    paddingLeft: 12,
  },
  selectedTextStyle: {
    fontSize: RFValue(14, windowHeight),
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
    color: colors.text,
    paddingLeft: 12,
  },
  //======================| TABLE |======================
  tableHead: {
    width: '100%',
    backgroundColor: colors.bgHeaderTable,
  },
  //======================| TEXT - TITLE |======================
  text8: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(6, windowHeight)
        : RFValue(8, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
  },

  text8Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(6, windowHeight)
        : RFValue(8, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text8SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(6, windowHeight)
        : RFValue(8, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text8Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(6, windowHeight)
        : RFValue(8, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text8ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(6, windowHeight)
        : RFValue(8, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text10: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(10, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
  },
  text10Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(10, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text10SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(10, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text10Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(10, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text10ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(10, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text12: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(12, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
  },
  text12Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(12, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text12SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(12, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text12Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(12, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text12ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(8, windowHeight)
        : RFValue(12, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text14: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(10, windowHeight)
        : RFValue(14, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
  },
  text14Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(10, windowHeight)
        : RFValue(14, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text14SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(10, windowHeight)
        : RFValue(14, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text14Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(10, windowHeight)
        : RFValue(14, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text14ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(10, windowHeight)
        : RFValue(14, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text16: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(12, windowHeight)
        : RFValue(16, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
  },
  text16Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(12, windowHeight)
        : RFValue(16, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text16SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(12, windowHeight)
        : RFValue(16, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text16Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(12, windowHeight)
        : RFValue(16, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text16ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(12, windowHeight)
        : RFValue(16, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text18: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(14, windowHeight)
        : RFValue(18, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Regular,
    letterSpacing: 0.5,
  },
  text18Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(14, windowHeight)
        : RFValue(18, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text18SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(14, windowHeight)
        : RFValue(18, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text18Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(14, windowHeight)
        : RFValue(18, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text18ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(14, windowHeight)
        : RFValue(18, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },
  text20: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(16, windowHeight)
        : RFValue(20, windowHeight),
    color: colors.text,
    fontFamily: fonts.Regular,
    fontStyle: 'normal',
  },
  text20Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(16, windowHeight)
        : RFValue(20, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text20SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(16, windowHeight)
        : RFValue(20, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text20Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(16, windowHeight)
        : RFValue(20, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text20ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(16, windowHeight)
        : RFValue(20, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },
  text24: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(20, windowHeight)
        : RFValue(24, windowHeight),
    color: colors.text,
    fontFamily: fonts.Regular,
    fontStyle: 'normal',
  },
  text24Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(20, windowHeight)
        : RFValue(24, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text24SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(20, windowHeight)
        : RFValue(24, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text24Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(20, windowHeight)
        : RFValue(24, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text24ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(20, windowHeight)
        : RFValue(24, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text28: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(24, windowHeight)
        : RFValue(28, windowHeight),
    color: colors.text,
    fontFamily: fonts.Regular,
    fontStyle: 'normal',
  },
  text28Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(24, windowHeight)
        : RFValue(28, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text28SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(24, windowHeight)
        : RFValue(28, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text28Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(24, windowHeight)
        : RFValue(28, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text28ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(24, windowHeight)
        : RFValue(28, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },

  text32: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(28, windowHeight)
        : RFValue(32, windowHeight),
    color: colors.text,
    fontFamily: fonts.Regular,
    fontStyle: 'normal',
  },
  text32Medium: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(28, windowHeight)
        : RFValue(32, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Medium,
  },
  text32SemiBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(28, windowHeight)
        : RFValue(32, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.SemiBold,
  },
  text32Bold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(28, windowHeight)
        : RFValue(32, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.Bold,
  },
  text32ExtraBold: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(28, windowHeight)
        : RFValue(32, windowHeight),
    color: colors.text,
    fontStyle: 'normal',
    fontFamily: fonts.ExtraBold,
  },
  text40: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(36, windowHeight)
        : RFValue(40, windowHeight),
    color: colors.text,
    fontFamily: fonts.Regular,
    fontStyle: 'normal',
  },

  textButton: {
    fontSize:
      isTablet && Platform.OS === 'android'
        ? RFValue(12, windowHeight)
        : RFValue(16, windowHeight),
    color: colors.titleButton,
    fontFamily: fonts.Regular,
    fontStyle: 'normal',
  },
  errorText: {
    color: colors.textRed,
    fontSize: RFValue(12, windowHeight),
    marginTop: 4,
    marginBottom: 12,
  },
  //======================| Tabview |======================
  TabView: {
    backgroundColor: colors.background,
    flex: 1,
    height: windowHeight,
  },
  //======================| BUTTON |======================
  button: {
    backgroundColor: colors.bgButton,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 1,
    borderColor: '#D4D4D4',
  },
  titleButton: {
    fontSize: RFValue(14, windowHeight),
    color: colors.titleButton,
    alignSelf: 'center',
    fontFamily: fonts.SemiBold,
  },

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  columnBtw: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  //===================| ICONS & IMAGES |======================
  icon: {
    width: isTablet ? squareImageSize(0.02) : squareImageSize(0.04),
    height: isTablet ? squareImageSize(0.02) : squareImageSize(0.04),
  },
  iconMedium: {
    width: isTablet ? squareImageSize(0.04) : squareImageSize(0.05),
    height: isTablet ? squareImageSize(0.04) : squareImageSize(0.05),
  },
  iconBig: {
    width: isTablet ? squareImageSize(0.05) : squareImageSize(0.07),
    height: isTablet ? squareImageSize(0.05) : squareImageSize(0.07),
  },
  iconSmall: {
    width: 16,
    height: 16,
  },
  iconTiny: {
    width: 10,
    height: 10,
  },
  mediumAvatar: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  bigAvatar: {
    width: 120,
    height: 120,
    borderRadius: 999,
  },

  iconMenu: {
    width: 64,
    height: 64,
  },
  logoLogin: {
    width: 250,
    height: 250,
  },

  //===================| MODAL |======================
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerBottom: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  // -- ---------------
  // --     Orther
  // -- ---------------
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonTable: {
    backgroundColor: colors.bgBtnDetail,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.29,
    shadowRadius: 1,
    elevation: 7,
    borderColor: '#D4D4D4',
    borderWidth: 0.5,
  },
  titleButtonTable: {
    color: colors.text,
    fontSize: RFValue(12, windowHeight),
    paddingHorizontal: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    borderColor: '#787878',
    marginHorizontal: 16,
    color: colors.text,
    borderRadius: 6,
    paddingHorizontal: 0,
  },
  itemTextStyle: {
    fontSize: RFValue(12, windowHeight),
    fontWeight: '400',
    color: colors.text,
    paddingLeft: 6,
    fontFamily: fonts.Regular,
  },

  boxTextGray: {
    backgroundColor: colors.bgInput,
    height: 54,
    width: '100%',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    fontSize: 14,
  },
  flexOne: {
    flex: 1,
  },

  //----------- MODAL -----------
  modalContentAdd: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 28,
    width: '100%',
    alignItems: 'flex-start',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  modalContentCenter: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: isTablet ? '56%' : '80%',
    alignItems: 'flex-start',
    borderRadius: 24,
  },

  modalContentBottom: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 24,
    width: '100%',
    alignItems: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  toastContainer: {
    backgroundColor: '#000000',
    flex: 1,
    height: windowHeight * 0.2,
    borderRadius: 2,
    width: windowWidth * 0.8,
  },
  FABDashboard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#E07900',
    borderRadius: 50,
    padding: 8,
    bottom: Platform.OS === 'ios' ? windowHeight * 0.12 : windowHeight * 0.1,
    right: 10,
  },

  // ===============================| RESPONSIVE PHONE AND TABLE STYLE |======================================
  //AUTH SCREEN
  paddingHorAuth: {
    paddingHorizontal: isTablet ? windowWidth * 0.25 : windowWidth * 0.06,
  },
  titleAuth: {
    color: colors.primary,
    marginBottom: windowHeight * 0.02,
    alignSelf: 'center',
  },
  avatar: {
    width: isTablet ? squareImageSize(0.09) : squareImageSize(0.12),
    height: isTablet ? squareImageSize(0.09) : squareImageSize(0.12),
    borderRadius: 999,
  },
  logoSquare: {
    width: isTablet ? squareImageSize(0.12) : squareImageSize(0.15),
    height: isTablet ? squareImageSize(0.12) : squareImageSize(0.15),
  },
  logoSquareMedium: {
    width: isTablet ? squareImageSize(0.15) : squareImageSize(0.2),
    height: isTablet ? squareImageSize(0.15) : squareImageSize(0.2),
  },
  logoSquareBig: {
    width: isTablet ? squareImageSize(0.2) : squareImageSize(0.25),
    height: isTablet ? squareImageSize(0.2) : squareImageSize(0.25),
  },
});
