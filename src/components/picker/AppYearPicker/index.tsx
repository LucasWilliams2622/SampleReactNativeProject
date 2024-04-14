import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {FlatList} from 'react-native';
import ModalCenter from '../../modals/ModalCenter';
import {AppYearPcikerProps} from './type';
import {getDaysInMonth} from 'date-fns';
import {colors} from 'src/styles/colors';
import {appStyle} from 'src/styles/appStyle';
import AppButton from 'src/components/buttons/AppButton';

const ITEM_SIZE = 48;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();

type CalendarTypeProps = {
  index: number;
  value: number | string;
};
const AppYearPicker = ({visible, setVisible}: AppYearPcikerProps) => {
  const inputRef = React.useRef();
  const scrollYYear = React.useRef(new Animated.Value(0)).current;
  const scrollYMonth = React.useRef(new Animated.Value(0)).current;
  const scrollYDate = React.useRef(new Animated.Value(0)).current;

  const [months, setMonths] = useState<CalendarTypeProps[]>([]);
  const [years, setYears] = useState<CalendarTypeProps[]>([]);
  const [dates, setDates] = useState<CalendarTypeProps[]>([]);
  const [selectedYear, setSelectedYear] = useState<CalendarTypeProps>(
    years[currentYear],
  );
  const [selectedMonth, setSelectedMonth] = useState<CalendarTypeProps>(
    months[currentMonth],
  );
  const [selectedDate, setSelectedDate] = useState<CalendarTypeProps>(
    dates[currentDate],
  );

  useEffect(() => {
    console.log('\n ', dates[currentDate]);
    console.log(
      'selectedYear',
      selectedYear,
      'selectedMonth',
      selectedMonth,
      'selectedDate',
      selectedDate,
    );
    console.log('\n');
  }, [selectedYear, selectedMonth, selectedDate]);

  const getYears = (startYear: number, endYear: number) => {
    const years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push({value: year, index: year});
    }
    setYears(years);
  };
  const getMonths = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      const monthObject = {
        index: i,
        value: `Tháng ${i}`,
      };
      months.push(monthObject);
    }
    setMonths(months);
  };
  const getDaysOfMonth = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(new Date(year, month));
    const days = Array.from({length: daysInMonth}, (_, i) => ({
      index: i + 1,
      value: i + 1,
    }));
    setDates(days);
  };

  useEffect(() => {
    getYears(1940, currentYear);
    getMonths();
    getDaysOfMonth(currentYear, currentMonth);
  }, []);

  const handleComfirm = () => {
    try {
      console.log(
        'selectedYear',
        selectedYear,
        'selectedMonth',
        selectedMonth,
        'selectedDate',
        selectedDate,
      );

      setVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item, index}, scrollY) => {
    const inputRange = [
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
      (index + 1) * ITEM_SIZE,
    ];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0.4, 1, 0.4],
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
    });

    console.log('inputRange,', inputRange);

    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: ITEM_SIZE,
          backgroundColor: 'transparent',
          borderWidth: 2,
        }}>
        <Animated.Text
          style={[
            appStyle.text14Medium,
            {
              opacity,
              transform: [
                {
                  scale,
                },
              ],
            },
          ]}>
          {item.value}
        </Animated.Text>
      </View>
    );
  };
  return (
    <ModalCenter
      width={'85%'}
      borderRadius={8}
      visible={visible}
      setVisible={setVisible}
      child={
        <View style={[appStyle.columnCenter, {width: '100%'}]}>
          <Text style={appStyle.text16SemiBold}>
            {selectedDate?.value} /{selectedMonth?.value} /{selectedYear?.value}
          </Text>
          <View
            style={{
              height: ITEM_SIZE * 3,
              width: '100%',
            }}>
            <View style={appStyle.rowBtw}>
              <Animated.FlatList
                data={dates}
                bounces={false}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                style={{flexGrow: 0, width: '33%', zIndex: 2, borderWidth: 2}}
                renderItem={({item, index}) =>
                  renderItem({item, index}, scrollYDate)
                }
                snapToInterval={ITEM_SIZE}
                keyExtractor={item => item.index.toString()}
                onMomentumScrollEnd={ev => {
                  const index = Math.round(
                    ev.nativeEvent.contentOffset.y / ITEM_SIZE,
                  );
                  setSelectedDate(dates[index + 1]);
                }}
                onScroll={Animated.event([
                  {nativeEvent: {contentOffset: {y: scrollYDate}}},
                  // {useNativeDriver: true},
                ])}
              />

              <Animated.FlatList
                data={months}
                bounces={false}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                style={{flexGrow: 0, width: '33%', zIndex: 2, borderWidth: 2}}
                renderItem={({item, index}) =>
                  renderItem({item, index}, scrollYMonth)
                }
                snapToInterval={ITEM_SIZE}
                keyExtractor={item => item.index.toString()}
                onMomentumScrollEnd={ev => {
                  const index = Math.round(
                    ev.nativeEvent.contentOffset.y / ITEM_SIZE,
                  );
                  setSelectedMonth(months[index + 1]);
                }}
                onScroll={Animated.event([
                  {nativeEvent: {contentOffset: {y: scrollYMonth}}},
                  // {useNativeDriver: true},
                ])}
              />
              <Animated.FlatList
                data={years}
                bounces={false}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                style={{flexGrow: 0, width: '33%', zIndex: 2, borderWidth: 2}}
                renderItem={({item, index}) =>
                  renderItem({item, index}, scrollYYear)
                }
                snapToInterval={ITEM_SIZE}
                keyExtractor={item => item.index.toString()}
                onMomentumScrollEnd={ev => {
                  const index = Math.round(
                    ev.nativeEvent.contentOffset.y / ITEM_SIZE,
                  );
                  setSelectedYear(years[index + 1]);
                }}
                onScroll={Animated.event([
                  {nativeEvent: {contentOffset: {y: scrollYYear}}},
                  // {useNativeDriver: true},
                ])}
              />
            </View>

            <View
              style={{
                backgroundColor: colors.bgComponent,
                top: ITEM_SIZE,
                width: '100%',
                height: ITEM_SIZE,
                position: 'absolute',
                borderRadius: 8,
                borderWidth: 2,
                borderColor: colors.disable,
              }}
            />
          </View>
          <View style={appStyle.rowBtw}>
            <AppButton
              title="Hủy"
              width={'48%'}
              textColor={colors.primary}
              backgroundColor={colors.third}
              borderColor={colors.third}
              onPress={() => setVisible(false)}
            />

            <AppButton
              title="Xác nhận"
              width={'48%'}
              onPress={() => handleComfirm()}
            />
          </View>
        </View>
      }
    />
  );
};

export default AppYearPicker;

const styles = StyleSheet.create({});
