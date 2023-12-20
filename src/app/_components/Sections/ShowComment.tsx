'use clients';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import useWindowSize from '@/hooks/useWindowSize';
import { dataTypes } from '@/types';

import Main_firefly from '@/assets/svg/Main_firefly.jpg';
import MessageComponent from '@/app/_components/MessageComponent';

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

const AddClassSortOn = (str: string): void => {
  document.querySelectorAll('.sort').forEach(e => {
    if (e.innerHTML === str) {
      e.classList.add('SortOn');
      return;
    }
    e.classList.remove('SortOn');
  });
};

const ShowComment = ({ messages, setSort, fetchSearch, fetchMessage }) => {
  const [searchInput, setSearchInput] = useState('');
  const nsize = useWindowSize();

  const SortClick = (sort: string) => {
    AddClassSortOn(sort);
    fetchMessage(sort.toLowerCase());
    setSort(sort.toLowerCase());
  };

  const onClickSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    fetchSearch(searchInput);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <ThirdSection bgsrc={Main_firefly.src}>
      <TitleBox>
        <ThirdHeaderText>
          <ThirdHeaderTextStrong>전세계 각지에서</ThirdHeaderTextStrong>
          <br />
          많은 사람들이 응원글 작성에
          {nsize.width <= 820 && <br />} 참여하고 있어요
        </ThirdHeaderText>
      </TitleBox>
      <CommentWrapper>
        <CommentHeader>
          <CommentSortButton
            id="best"
            className="SortOn sort"
            onClick={() => SortClick('Best')}
          >
            Best
          </CommentSortButton>
          <DividerLine orientation="vertical" />
          <CommentSortButton
            id="new"
            className="sort"
            onClick={() => SortClick('New')}
          >
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
          {Array.isArray(messages) &&
            messages.map((v: dataTypes.MessageType) => (
              <MessageComponent key={v.messageId} message={v} />
            ))}
        </ShowCommentWrapper>
      </CommentWrapper>
    </ThirdSection>
  );
};

export default ShowComment;
