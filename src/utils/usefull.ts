import { dataTypes } from '@/types';
import { Dispatch, SetStateAction } from 'react';

// fetch하고 state를 set하는 함수를 분리
export const fetchAndSet = <T>(
  setState: Dispatch<SetStateAction<T>>,
  fetchFunction: dataTypes.FetchFunctionType,
  catchFunction: any,
) => {
  const fetchDataAndSetState = async (...params: any[]): Promise<void> => {
    try {
      const result = await fetchFunction(...params);
      setState(result);
    } catch (error) {
      catchFunction(error);
    }
  };

  return fetchDataAndSetState;
};

export const onClickInsta = (): void => {
  window.open('https://www.instagram.com/gazaschildreadhope/');
};

export const errorToString = (err: unknown): string => {
  let message: string;
  if (err instanceof Error) message = err.message;
  else message = String(err);
  return message;
};

export const phoneValid = (
  toast: dataTypes.CustomToast,
  phone: string,
): boolean => {
  if (phone.length < 11) {
    toast.createAlertMessaeg('11자리 이상 입력해주세요');
    return false;
  }
  if (phone.length > 13) {
    toast.createAlertMessaeg('12자리 이하 입력해주세요');
    return false;
  }
  return true;
};

export const idValid = (
  toast: dataTypes.CustomToast,
  id: string,
  content?: string,
): boolean => {
  if (id.length < 2) {
    toast.createAlertMessaeg('닉네임은 2자 이상 입력해주세요');
    return false;
  }
  if (id.length > 8) {
    toast.createAlertMessaeg('닉네임은 8자 이하 입력해주세요');
    return false;
  }
  if (content !== undefined && content.length === 0) {
    toast.createAlertMessaeg('내용을 입력해주세요.');
    return false;
  }
  return true;
};
