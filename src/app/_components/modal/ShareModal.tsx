'use clients';

import { useToast, FormControl } from '@chakra-ui/react';
import Image from 'next/image';

import DocIcon from '@/assets/svg/DocIcon.svg';
import FacebookIcon from '@/assets/svg/FacebookIcon.svg';
import InstaIcon from '@/assets/svg/InstaIcon.svg';
import KakaoIcon from '@/assets/svg/KakaoIcon.svg';

import { urlToCopy } from '@/constants/index';
import Modal from './modal.style';

const ShareModal = () => {
  const toast = useToast();

  // Need Clipboard API
  const onClickShareLink = async (): Promise<void> => {
    try {
      if (navigator) await navigator.clipboard.writeText(urlToCopy);
      // Show a success toast
      toast({
        title: '클립보드에 복사되었습니다!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      // Show an error toast
      toast({
        title: '클립보드 복사에 실패했습니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const ShareSNSClick = (sns: string): void => {
    const snsTitle = '가자지구 아이들에게 응원 메세지를 남겨주세요!';
    if (sns === 'facebook') {
      const url = `http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        urlToCopy,
      )}`;
      window.open(url, '', 'width=486, height=286');
    } else if (sns === 'twitter') {
      const url = `http://twitter.com/share?url=${encodeURIComponent(
        urlToCopy,
      )}&text=${encodeURIComponent(snsTitle)}`;
      window.open(url, 'tweetPop', 'width=486, height=286,scrollbars=yes');
    } else if (sns === 'band') {
      const url = `http://www.band.us/plugin/share?body=${encodeURIComponent(
        snsTitle,
      )}&route=${encodeURIComponent(urlToCopy)}`;
      window.open(url, 'shareBand', 'width=400, height=500, resizable=yes');
    }
  };
  // Todo - KaKao Share API 연결
  // Todo - Insta 방법 찾기
  return (
    <Modal.ShareModalWrapper>
      <Modal.CommentModalHeader>
        <Modal.CommentModalHeaderText>공유하기</Modal.CommentModalHeaderText>
      </Modal.CommentModalHeader>
      <Modal.ModalCloseIcon width={12} height={12} />
      <FormControl as="fieldset">
        <Modal.ShareModalBody>
          <Modal.ShareIconBox>
            <Image src={KakaoIcon.src} width={65} height={65} alt="KakaoIcon" />
            <Modal.IconText>카카오톡</Modal.IconText>
          </Modal.ShareIconBox>
          <Modal.ShareIconBox
            onClick={() => {
              ShareSNSClick('facebook');
            }}
          >
            <Image
              src={FacebookIcon.src}
              width={65}
              height={65}
              alt="FacebookIcon"
            />
            <Modal.IconText>페이스북</Modal.IconText>
          </Modal.ShareIconBox>
          <Modal.ShareIconBox>
            <Image src={InstaIcon.src} width={65} height={65} alt="InstaIcon" />
            <Modal.IconText>인스타</Modal.IconText>
          </Modal.ShareIconBox>
        </Modal.ShareModalBody>
        <Modal.ShareURLButton
          onClick={onClickShareLink}
          type="submit"
          variant="solid"
          colorScheme="blue"
        >
          <Modal.TextURL>URL 복사하기</Modal.TextURL>
          <Image src={DocIcon.src} width={21} height={22} alt="DocIcon" />
        </Modal.ShareURLButton>
      </FormControl>
    </Modal.ShareModalWrapper>
  );
};

export default ShareModal;
