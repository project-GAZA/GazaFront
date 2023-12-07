'use clients';

import React, { useState, useEffect, useRef } from 'react';
import { FaSearchengin } from 'react-icons/fa';

import {
  ThirdSection,
  TitleBox,
  ThirdHeaderText,
  ThirdHeaderTextStrong,
  CommentWrapper,
  CommentHeader,
  CommentSortButton,
  Search,
  SearchInput,
  SearchIcon,
  ShowCommentWrapper,
  DividerLine,
} from './section.style';
import Main_firefly from '@/assets/svg/Main_firefly.jpg';
import MessageComponent from '@/components/MessageComponent';

import { MessageType } from '@/types';

const ShowComment = () => {
  const [messages, setMessages] = useState([]);
  const newButton = useRef<HTMLDivElement>();
  const BestButton = useRef<HTMLDivElement>();

  // const size = useWindowSize(); 윈도우 사이즈 조정되면...

  const getComments = async (sort, size = 100, page = 0) => {
    const response = await fetch(
      `/api/message?sort=${sort}&page=${page}&size=${size}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    );

    if (response.status === 200) {
      const data = await response.json();
      setMessages(data);
    }
  };
  useEffect(() => {
    getComments('new');
  }, []);

  const BestClick = () => {
    BestButton.current.classList.add('SortOn');
    newButton.current.classList.remove('SortOn');
    getComments('best');
  };
  const NewClick = () => {
    BestButton.current.classList.remove('SortOn');
    newButton.current.classList.add('SortOn');
    getComments('new');
  };
  return (
    <ThirdSection bgsrc={Main_firefly.src}>
      <TitleBox>
        <ThirdHeaderText>
          <ThirdHeaderTextStrong>전세계 각지에서</ThirdHeaderTextStrong>
          <br />
          많은 사람들이 응원글 작성에
          <br /> 참여하고 있어요
        </ThirdHeaderText>
      </TitleBox>
      <CommentWrapper>
        <CommentHeader>
          <CommentSortButton
            className="SortOn"
            ref={BestButton}
            onClick={BestClick}
          >
            Best
          </CommentSortButton>
          <DividerLine orientation="vertical" />
          <CommentSortButton ref={newButton} onClick={NewClick}>
            New
          </CommentSortButton>
          <Search>
            <SearchInput variant="unstyled" placeholder="닉네임 검색" />
            <SearchIcon>
              <FaSearchengin color="white" />
            </SearchIcon>
          </Search>
        </CommentHeader>
        <ShowCommentWrapper>
          {messages &&
            messages.map((v: MessageType) => (
              <MessageComponent key={v.messageId} message={v} />
            ))}
        </ShowCommentWrapper>
      </CommentWrapper>
    </ThirdSection>
  );
};

export default ShowComment;
