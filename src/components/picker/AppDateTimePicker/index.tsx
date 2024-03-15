import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {AppDateTimePickerProps} from './type';
import {TouchableOpacity} from 'react-native';
import {colors} from 'src/styles/colors';
import {appStyle} from 'src/styles/appStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import moment from 'moment';

const AppDateTimePicker: React.FC<AppDateTimePickerProps> = ({
  mode = 'time',
  pickDays = false,
  iconColor = colors.text,
  iconSize = 20,
  width = '100%',
  confirmText = 'Xác nhận',
  cancelText = 'Huỷ',

  title = mode === 'time'
    ? 'Hãy chọn giờ'
    : mode === 'date'
    ? 'Hãy chọn ngày'
    : 'Hãy chọn ngày giờ',
  onDateChange,
  ...props
}: AppDateTimePickerProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = useState<string>(
    mode === 'time'
      ? moment(date).format('HH:mm')
      : mode === 'date'
      ? moment(date).format('DD-MM-YYYY')
      : moment(date).format('DD-MM-YYYY HH:mm'),
  );
  const [showPicker, setShowPicker] = useState<boolean>(false);

  // const handleDateChange = (selectedDate: Date) => {};

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    setFormattedDate(
      mode === 'time'
        ? moment(selectedDate).format('HH:mm')
        : mode === 'date'
        ? moment(selectedDate).format('DD-MM-YYYY')
        : moment(selectedDate).format('DD-MM-YYYY HH:mm'),
    );
    setShowPicker(false);
    onDateChange(selectedDate);
  };

  const handleCancel = () => {
    setShowPicker(false);
  };

  const handleClick = () => {
    setShowPicker(true);
  };
  return (
    <TouchableOpacity
      style={[appStyle.rowBtw, styles.container, {width: width}]}
      onPress={handleClick}>
      <Text style={appStyle.text14Medium}>{formattedDate}</Text>

      {mode === 'time' ? (
        <Icon
          name="clockcircleo"
          type={IconType.AntDesign}
          size={iconSize}
          color={iconColor}
        />
      ) : (
        <Icon
          name="calendar"
          type={IconType.Ionicons}
          size={iconSize}
          color={iconColor}
        />
      )}

      <DatePicker
        mode={mode}
        modal
        // onDateChange={handleDateChange}
        open={showPicker}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        confirmText={confirmText}
        cancelText={cancelText}
        title={title}
        {...props}
        date={date}
      />
    </TouchableOpacity>
  );
};

export default AppDateTimePicker;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.borderColor,
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
  },
});
