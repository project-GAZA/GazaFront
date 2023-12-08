'use clients';

import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import useWindowSize from '@/hooks/useWindowSize';

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

import { fetchComments, fetchSearchComments } from '@/utils/api';

import { MessageType } from '@/types/index.d';

const ShowComment = () => {
  const [messages, setMessages] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const newButton = useRef<HTMLDivElement>();
  const BestButton = useRef<HTMLDivElement>();

  const size = useWindowSize();

  const fetchAndSetMessage = async (sort, size = 100, page = 0) => {
    try {
      const result = await fetchComments(sort, size, page);
      setMessages(result);
    } catch (error) {
      // Handle error
    }
  };

  const SearchAndSetMessage = async (username, size = 100, page = 0) => {
    try {
      const result = await fetchSearchComments(username, size, page);
      setMessages(result);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchAndSetMessage('best');
  }, []);

  const BestClick = () => {
    BestButton.current.classList.add('SortOn');
    newButton.current.classList.remove('SortOn');
    fetchAndSetMessage('best');
  };
  const NewClick = () => {
    BestButton.current.classList.remove('SortOn');
    newButton.current.classList.add('SortOn');
    fetchAndSetMessage('new');
  };

  const onClickSearch = e => {
    e.preventDefault();
    SearchAndSetMessage(searchInput);
  };

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
  };

  return (
    <ThirdSection bgsrc={Main_firefly.src}>
      <TitleBox>
        <ThirdHeaderText>
          <ThirdHeaderTextStrong>전세계 각지에서</ThirdHeaderTextStrong>
          <br />
          많은 사람들이 응원글 작성에
          {size.width <= 820 && <br />} 참여하고 있어요
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
            <form onSubmit={onClickSearch}>
              <SearchInput
                value={searchInput}
                onChange={onChangeSearchInput}
                variant="unstyled"
                placeholder="작성자 검색"
              />
              <SearchIcon onClick={onClickSearch}>
                <FaSearch color="white" />
              </SearchIcon>
            </form>
          </Search>
        </CommentHeader>
        <ShowCommentWrapper id="CommentStack">
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
