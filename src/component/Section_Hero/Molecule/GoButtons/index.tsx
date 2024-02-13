import React from 'react';
import Button, { ButtonType } from '@/component/Section_Hero/Attom/Button';
import styles from './index.module.scss';

export interface GoButtonsType {
  /**
   * 배치할 버튼들 모음입니다. - 3개 이상 넣으면 데스크탑 화면에서 깨질 확률이 높습니다.
   */
  Buttons: Array<ButtonType>;
  /**
   * 버튼 사이에 공백 값입니다.
   */
  gap: number;
}

const GoButtons = ({ Buttons, gap }: GoButtonsType) => {
  const boxStyle: any = {
    gap: `${gap}px`,
  };
  return (
    <div style={boxStyle} className={styles.gobutton}>
      {Buttons.map(v => {
        return (
          <Button
            marginLeft={v.marginLeft}
            marginRight={v.marginRight}
            marginBottom={v.marginBottom}
            marginTop={v.marginTop}
            key={v.children}
            fill={v.fill}
            theme={v.theme}
            onClick={v.onClick}
          >
            {v.children}
          </Button>
        );
      })}
    </div>
  );
};

export default GoButtons;
