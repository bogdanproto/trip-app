export interface ICities {
  _id: string;
  title: string;
  imgCloud: string;
}

export interface ITrip {
  _id: string;
  item: ICities;
  startDate: string;
  endDate: string;
}

export interface ITripActive {
  _id: null | string;
  weatherToday: any;
  weatherByDay: any;
}

export interface ISliceData {
  trips: ITrip[];
  activeTrip: ITripActive;
  cities: ICities[];
  filter: string | null;
  errorData: string | null;
  succesMsg: string | null;
  isLoading: boolean;
}

export interface ITripCreate {
  item: string;
  startDate: string;
  endDate: string;
}
