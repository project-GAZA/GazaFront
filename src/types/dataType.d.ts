export interface MessagePostType {
  nation: string;
  latitude: string;
  longitude: string;
  content: string;
  nickname: string;
}

export interface MessageType {
  message_id: number;
  username: string;
  content: string;
  like_count: number;
  donate_type: string;
  nation: string;
  latitude: number;
  longitude: number;
  created_date: string;
  last_modified_date: string;
}
