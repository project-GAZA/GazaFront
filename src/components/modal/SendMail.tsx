'use clients';

import {
  CommentModalHeader,
  CommentModalHeaderText,
  ModalCloseIcon,
  ShareModalWrapper,
  DonateSubText,
  SendMailBody,
} from './modal.style';

const ShareModal = () => {
  return (
    <ShareModalWrapper>
      <CommentModalHeader>
        <CommentModalHeaderText />
      </CommentModalHeader>
      <ModalCloseIcon width={12} height={12} />
      <SendMailBody>
        <CommentModalHeaderText>
          peace.in.gaza.kr@gmail.com{' '}
        </CommentModalHeaderText>
        <DonateSubText>문의사항은 위 주소로 메일 보내주세요!</DonateSubText>
      </SendMailBody>
    </ShareModalWrapper>
  );
};

export default ShareModal;
