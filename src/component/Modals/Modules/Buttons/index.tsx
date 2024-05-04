import React from 'react';
import Button from '@/component/Common/Attom/SmallButton';
import styles from './index.module.scss';

interface ButtonsProps {
  onClickHeart: () => void;
  onClickDonate: () => void;
  hearttheme?: 'black' | 'white';
  donatetheme?: 'black' | 'white';
  heartcolor?: 'primary' | 'secondary' | 'white' | 'red' | 'gray';
  donatecolor?: 'primary' | 'secondary' | 'white' | 'red' | 'gray';
}

const Buttons = ({
  onClickHeart,
  onClickDonate,
  heartcolor = 'red',
  donatecolor = 'white',
  hearttheme = 'white',
  donatetheme = 'black',
}: ButtonsProps) => {
  return (
    <div className={styles.layout}>
      <Button onClick={onClickHeart} theme={hearttheme} background={heartcolor}>
        마음만 전달하기
      </Button>
      <Button
        onClick={onClickDonate}
        theme={donatetheme}
        background={donatecolor}
      >
        후원하기
      </Button>
    </div>
  );
};

export default Buttons;
