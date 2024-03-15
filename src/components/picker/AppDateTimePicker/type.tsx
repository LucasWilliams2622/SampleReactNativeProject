import {DatePickerProps} from 'react-native-date-picker';

export type AppDateTimePickerProps = DatePickerProps & {
  mode?: 'date' | 'time' | 'datetime';
  iconColor?: string;
  iconSize?: number;
  containerStyle?: React.ReactNode;
  width?: any;
  title?: string;
  confirmText?: string;
  cancelText?: string;

  onDateChange: (date: Date) => void;
};
