// export const APIURL = 'http://localhost:8080';
import background1 from '@/assets/svg/background/1.png';
import background2 from '@/assets/svg/background/2.png';
import background3 from '@/assets/svg/background/3.png';
import background4 from '@/assets/svg/background/4.png';
import background5 from '@/assets/svg/background/5.png';
import background6 from '@/assets/svg/background/6.png';

import {
  ShowComment,
  ShowInfo,
  InputSectionText,
  ExplainSection,
  Explain,
} from './korean';

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
