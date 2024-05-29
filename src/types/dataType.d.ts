export interface SituationType {
  id?: number;
  title: string;
  amount: number;
}
export interface MessagePostType {
  nation: string;
  latitude: string;
  longitude: string;
  content: string;
  nickname: string;
}

export interface MessageType {
  id: number;
  username: string;
  content: string;
  nation: string;
  latitude: number;
  longitude: number;
  amount: number;
  created_dt: string;
  modified_dt: string;
}
