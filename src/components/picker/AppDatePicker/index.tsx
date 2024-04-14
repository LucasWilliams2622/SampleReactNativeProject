import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from 'src/styles/colors';

import {AppDateTimePickerProps} from './type';
import ModalCenter from '../../modals/ModalCenter';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {DateData, Direction} from 'react-native-calendars/src/types';
import moment from 'moment';
import AppYearPicker from '../AppYearPicker';
import {appStyle} from 'src/styles/appStyle';
import AppButton from 'src/components/buttons/AppButton';
export interface SelectedDateCalendar {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

LocaleConfig.locales['vn'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Th 1',
    'Th 2',
    'Th 3',
    'Th 4',
    'Th 5',
    'Th 6',
    'Th 7',
    'Th 8',
    'Th 9',
    'Th 10',
    'Th 11',
    'Th 12',
  ],
  dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'vn';

const AppDateTimePicker = ({
  title = 'Ngày sinh',
  titleStyle,
  typePicker = 'date',
  marginTop,
  containerStyle,
  mainStyle,
  borderRadius = 10,
  backgroundColor = colors.bgComponent,
  paddingVertical = Platform.OS === 'ios' ? 14 : 12,
  paddingHorizontal = 16,
  width = '100%',
  height,
  disable = false,
}: AppDateTimePickerProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPickYear, setShowPickYear] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDateText, setSelectedDateText] = useState('');

  const handleDateSelect = (date: SelectedDateCalendar) => {
    setSelectedDate(date.dateString);
  };

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={[
          appStyle.rowBtw,
          {
            flex: 1,
            backgroundColor: colors.bgComponent,
            borderRadius: 8,
            padding: 14,
          },
        ]}
        onPress={() => setShowPickYear(true)}>
        <Text style={appStyle.text16SemiBold}>
          Tháng {currentMonth}/{currentYear}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderArrow = (direction: Direction) => {
    return <></>;
  };

  const onMonthChange = (month: DateData) => {
    setCurrentMonth(month.month);
    setCurrentYear(month.year);
  };
  const handleConfirm = () => {
    setSelectedDateText(selectedDate);
    setShowCalendar(false);
  };

  return (
    <View style={[{marginTop}, mainStyle]}>
      <Text style={[appStyle.text12Medium, styles.title, titleStyle]}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => setShowCalendar(true)}
        style={[
          styles.boxInput,
          {
            width: width,
            height: height,
            backgroundColor: disable ? '#F5F5F5' : backgroundColor,
            borderRadius: borderRadius,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
          },
          containerStyle,
        ]}>
        <Text style={appStyle.text14Medium}>
          {selectedDateText
            ? moment(selectedDateText).format('DD/MM/YYYY')
            : moment().format('DD/MM/YYYY')}
        </Text>
      </TouchableOpacity>
      {/* Modal select date */}
      <ModalCenter
        borderRadius={8}
        visible={showCalendar}
        setVisible={setShowCalendar}
        containerStyle={{padding: 0, paddingTop: 10, paddingBottom: 16}}
        child={
          <View style={{}}>
            <Calendar
              style={{}}
              headerStyle={{}}
              theme={{
                todayTextColor: colors.primary,
                textDayFontFamily: 'Medium',
                'stylesheet.calendar.header': {
                  marginHorizontal: 0,
                  dayTextAtIndex0: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                  dayTextAtIndex1: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                  dayTextAtIndex2: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                  dayTextAtIndex3: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                  dayTextAtIndex4: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                  dayTextAtIndex5: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                  dayTextAtIndex6: {
                    color: colors.primary,
                    fontFamily: 'Medium',
                  },
                },
              }}
              firstDay={1}
              hideArrows
              arrowsHitSlop={null}
              enableSwipeMonths={true}
              maxDate={new Date().toISOString()}
              onDayPress={handleDateSelect}
              onMonthChange={onMonthChange}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: colors.primary,
                },
              }}
              renderArrow={renderArrow}
              renderHeader={renderHeader}
            />

            <View style={[appStyle.rowBtw, {marginTop: 16}]}>
              <AppButton
                width={'48%'}
                backgroundColor={colors.successColor2}
                borderColor={colors.successColor2}
                title="Hủy"
                textColor={colors.successColor}
                onPress={() => {
                  setShowCalendar(false);
                }}
              />
              <AppButton
                width={'48%'}
                title="Xác nhận"
                onPress={handleConfirm}
              />
            </View>
          </View>
        }
      />
      {/* Modal select year */}
      <AppYearPicker visible={showPickYear} setVisible={setShowPickYear} />
    </View>
  );
};

export default AppDateTimePicker;

const styles = StyleSheet.create({
  boxInput: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    marginBottom: 4,
  },
});
