import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '@/store/modalState';
import { messageState } from '@/store/postState';

import instance from '@/utils/clientaxios';

import SmallButton from '@/component/Common/Attom/SmallButton';
import CloseButton from '@/component/Modals/Attom/CloseButton';
import DonateNameInput from '@/component/Modals/Modules/DonateNameInput';
import DonateContent from '@/component/Modals/Modules/DonateContent';

import styles from './index.module.scss';

const WhoDonate = () => {
  const setModal = useSetRecoilState<string>(modalState);
  const message: any = useRecoilValue(messageState);
  const [nick, setNick] = useState('');
  const [animation, setAnimation] = useState<string>(styles.layout);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const res = await instance.patch('/message?field=username', {
        id: message.id,
        value: nick,
      });
      if (res.status !== 200) {
        throw new Error('서버에러: 닉네임변경에 실패했습니다.');
      }
      toast.success('메세지의 닉네임을 토스송금닉네임으로 변경했습니다.');
      const resData = await instance.get('/message?field=username');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setModal('complete');
    }
  };

  return (
    <div className={animation}>
      <div className={styles.closeCont}>
        <CloseButton theme="light" />
      </div>
      <div className={styles.donateCont}>
        <DonateContent
          title="후원자님의 정보를 남겨주세요!"
          content="
        후원확인 후 후원자님의 메세지에
        특별한 표시를 남겨드립니다.
        "
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className={styles.inputCont}>
          <DonateNameInput nick={nick} setNick={setNick} />
        </div>
        <div className={styles.buttonCont}>
          <SmallButton type="submit" disabled={nick.length < 2} theme="black">
            후원자 등록하기
          </SmallButton>
        </div>
      </form>
    </div>
  );
};

export default WhoDonate;
