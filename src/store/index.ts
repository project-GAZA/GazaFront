import { atom, selector } from 'recoil';
import instance from '@/utils/clientaxios';

import { AxiosResponse } from 'axios';
import { MessageType } from '@/types/dataType';

// 디바이스가 PC인지 mobile인지
export const deviceState = atom({
  key: 'device',
  default: '',
});

// Modal 상태관리
export const modalState = atom({
  key: 'modal',
  default: '',
});

// Refresh를 위한 값 => 실제 읽기는 없음
export const messageReqIDAtom = atom({
  key: 'messageReqIDAtom',
  default: 0,
});

export const messageAsyncState = selector({
  key: 'messageAsyncState',
  get: async ({ get }) => {
    try {
      get(messageReqIDAtom);
      const res: AxiosResponse<MessageType[]> = await instance.get(
        `/message?size=100&page=1&sort=new`,
      );
      return res.data;
    } catch (e: any) {
      throw new Error(`메세지를 받아오는데 에러 발생 : ${e.data.meesage}`);
    }
  },
});
