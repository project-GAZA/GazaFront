import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store/modalState';
import axiosInstance from '@/utils/clientaxios';

import CloseButton from '@/component/Modals/Attom/CloseButton';
import Title from '@/component/Modals/Attom/Title';
import Input from '@/component/Modals/Attom/Input';
import Content from '@/component/Modals/Attom/Content';
import SmallButton from '@/component/Common/Attom/SmallButton';
import MessageInput from '@/component/Modals/Attom/MessageInput';

import styles from './index.module.scss';

const DirectMessage = () => {
  const setModal = useSetRecoilState<string>(modalState);
  const [nick, setNick] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [animation, setAnimation] = useState<string>(styles.layout);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onSubmitForm = (): void => {
    axiosInstance
      .post('/message', {
        nickname: nick,
        content,
      })
      .then(res => {})
      .catch(err => {});
    setModal('share');
  };

  return (
    <div className={animation}>
      <form onSubmit={onSubmitForm}>
        <div className={styles.closeCont}>
          <CloseButton theme="light" />
        </div>
        <div className={styles.titleBox}>
          <Title color="black" title="어떤 이름으로 송금하셨나요?" />
          <div className={styles.empty} />
          <Title color="black" title="확인 후  특별한 표시를 남겨드려요" />
        </div>
        <div className={styles.inputBox}>
          <Input
            nickName={nick}
            changeNickName={e => {
              setNick(e.target.value);
            }}
          />
        </div>
        <div className={styles.contentBox}>
          <Content
            align="left"
            color="black"
            content="어린이들에게 전하는 따뜻한 응원의 말 남겨주세요!<br/><strong>(선택)</strong>"
          />
        </div>
        <div className={styles.messageBox}>
          <MessageInput
            content={content}
            changeContent={e => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonBox}>
          <SmallButton fontSize={15} theme="black" type="submit">
            완료하기
          </SmallButton>
        </div>
      </form>
    </div>
  );
};

export default DirectMessage;
