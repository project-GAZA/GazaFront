// export const APIURL = 'http://localhost:8080';
import background1 from '@/assets/svg/background/1.png';
import background2 from '@/assets/svg/background/2.png';
import background3 from '@/assets/svg/background/3.png';
import background4 from '@/assets/svg/background/4.png';
import background5 from '@/assets/svg/background/5.png';
import background6 from '@/assets/svg/background/6.png';

import ExplainSendMoneyImg1 from '@/assets/svg/ExplainSendMoney/ExplainSendMoney1.svg';
import ExplainSendMoneyImg2 from '@/assets/svg/ExplainSendMoney/ExplainSendMoney2.svg';
import ExplainSendMoneyImg3 from '@/assets/svg/ExplainSendMoney/ExplainSendMoney3.svg';

import {
  ShowComment,
  ShowInfo,
  InputSectionText,
  ExplainSection,
  Explain,
} from './korean';

export const ExplainSendMoney = [
  {
    src: ExplainSendMoneyImg1.src,
    text: `‘익명 송금하기’ 버튼을 클릭`,
  },
  {
    src: ExplainSendMoneyImg2.src,
    text: `
이름과 금액을 작성 <br/>
※ 이름은 010을 제외한 전화번호 뒷자리로 해 주세요!
`,
  },
  {
    src: ExplainSendMoneyImg3.src,
    text: `
‘보내기’ 버튼을 누르면
후원금 보내기 성공!
`,
  },
];

export const backgrounds = [
  background1.src,
  background2.src,
  background3.src,
  background4.src,
  background5.src,
  background6.src,
];

export const APIURL = 'http://192.168.100.10:8080';

export const urlToCopy = 'https://www.gazas-child-read-hope.kr';

export const Korean = {
  mobile: {
    InputSectionText: InputSectionText.mobile,
    ExplainSection,
    Explain,
    ShowInfo: ShowInfo.mobile,
    ShowComment: ShowComment.mobile,
  },
  pc: {
    InputSectionText: InputSectionText.pc,
    ExplainSection,
    Explain,
    ShowInfo: ShowInfo.pc,
    ShowComment: ShowComment.pc,
  },
};
