export interface Province {
  province_id?: string | number;
  province_name: string;
  name: string;
  full_name: string;
  name_en: string;
  id: number;
  type: string;
  region: {
    name: string;
    name_en: string;
    id: number;
  };
  area: number;
  population: number;
  number_plates: number[];
  is_border: boolean;
  is_coastal: boolean;
  neighbours: {
    name: string;
    full_name: string;
    name_en: string;
    id: number;
    type: string;
  }[];
  districts_count: number;
  wards_count: number;
  districts: {
    name: string;
    full_name: string;
    name_en: string;
    id: number;
    type: string;
  }[];
}

export interface District {
  district_id: string | number;
  district_name: string;
  name: string;
  full_name: string;
  name_en: string;
  id: number;
  type: string;
  province: {
    name: string;
    full_name: string;
    name_en: string;
    id: number;
    type: string;
    region_id: number;
  };
  is_border: boolean;
  is_coastal: boolean;
  wards_count: number;
  wards: {
    name: string;
    full_name: string;
    name_en: string;
    id: number;
    type: string;
  }[];
}

export interface Ward {
  ward_id: string | number;
  ward_name: string;
  name: string;
  full_name: string;
  name_en: string;
  id: number;
  type: string;
}

export interface SelectedDateCalendar {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

export interface BranchProps {
  id: number;
  image: string;
  name: string;
  star?: number;
  address?: string;
  hoursOfOperation?: {
    start: string;
    end: string;
  };
  phone?: string;
}

export interface MenuProps {
  id: number;
  image: string;
  name: string;
  star: number;
  type: string;
  price: number;
}

export interface VoucherProps {
  id: number;
  name: string;
  note: string;
  expired: string;
  discount: number;
}

export interface TableProps {
  id: number;
  name: string;
  image: string;
  address: string;
  time: string;
  location?: string;
  people: number;
  date: string;
  type?: 'conplete' | 'cancel' | 'ordered' | 'arrived';
}
export interface ReviewProps {
  id: number;
  name: string;
  avatar: string;
  review: string;
  date: string;
  star: number;
}
export interface SelectPeopleProps {
  _index: number;
  id: number;
  value: string;
}
export interface DataSearchProps {
  _index: number;
  id: number;
  value: string;
}
export interface UserProps {
  id: number;
  token?: string;
  name: string;
  phone: string;
  email: string;
  avatar?: string;
}
export interface TableOrderProps {
  id: number;
  user?: UserProps;
  table?: TableProps;
}
export interface DishProps {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}
export interface OrderedDishProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  status: 'served' | 'preparing';
}

export interface CategoryMenuProps {
  id: number;
  name: string;
  image: any;
}
export interface NotificationProps {
  id: number;
  title: string;
  content: string;
  image: any;
  date: string;
  readed: boolean;
  option: 'voucher' | 'account' | 'system';
}

export interface DataContentProps {
  id: number;
  title?: string;
  content?: string;
}
