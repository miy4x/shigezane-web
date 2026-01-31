// 賃貸建物マスタ
export interface Building {
  building_id: number;
  name: string;
  address: string;
  building_age: number;
  structure: string;
  total_floors: number;
  created_at: string;
  updated_at: string;
}

// 賃貸部屋
export interface RentalUnit {
  unit_id: number;
  building_id: number;
  building?: Building; // JOIN時に取得
  unit_number: string;
  floor: number;
  room_layout: string;
  area: number;
  monthly_rent: number;
  deposit: number;
  key_money: number;
  status: 'available' | 'occupied' | 'reserved';
  images: string[]; // JSONB
  unit_features: string[]; // JSONB
  created_at: string;
  updated_at: string;
}

// ウィークリー部屋
export interface WeeklyUnit {
  weekly_unit_id: number;
  building_id: number;
  building?: Building;
  unit_number: string;
  floor: number;
  room_layout: string;
  area: number;
  daily_rate: number;
  weekly_rate: number;
  monthly_rate: number;
  status: 'available' | 'occupied' | 'reserved';
  images: string[];
  unit_features: string[];
  created_at: string;
  updated_at: string;
}

// 売買：土地
export interface LandProperty {
  land_id: number;
  address: string;
  sale_price: number;
  land_area: number;
  zoning: string;
  building_coverage: number;
  floor_area_ratio: number;
  road_contact: string;
  land_category: string;
  status: 'available' | 'sold' | 'pending';
  images: string[];
  land_details: Record<string, any>; // JSONB
  created_at: string;
  updated_at: string;
}

// 売買：戸建/中古マンション
export interface HouseProperty {
  house_id: number;
  property_type: 'detached' | 'condo';
  address: string;
  sale_price: number;
  land_area: number;
  building_area: number;
  room_layout: string;
  building_age: number;
  structure: string;
  floor: number;
  status: 'available' | 'sold' | 'pending';
  images: string[];
  house_details: Record<string, any>;
  created_at: string;
  updated_at: string;
}

// 駐車場マスタ
export interface ParkingLot {
  parking_lot_id: number;
  name: string;
  address: string;
  total_spaces: number;
  images: string[];
  lot_features: string[];
  created_at: string;
  updated_at: string;
}

// 駐車スペース
export interface ParkingSpace {
  parking_space_id: number;
  parking_lot_id: number;
  space_number: string;
  monthly_fee: number;
  vehicle_size: string;
  status: 'available' | 'occupied' | 'reserved';
  created_at: string;
  updated_at: string;
}

// 駐車場詳細（マスタ + スペース一覧）
export interface ParkingLotDetail extends ParkingLot {
  spaces: ParkingSpace[];
}
