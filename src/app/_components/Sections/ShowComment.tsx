'use clients';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import useWindowSize from '@/hooks/useWindowSize';
import { dataTypes, propsTypes } from '@/types';

import Main_firefly from '@/assets/svg/Main_firefly.jpg';
import MessageComponent from '@/app/_components/MessageComponent';

import Section from './section.style';

const AddClassSortOn = (str: string): void => {
  document.querySelectorAll('.sort').forEach(e => {
    if (e.innerHTML === str) {
      e.classList.add('SortOn');
      return;
    }
    e.classList.remove('SortOn');
  });
};

const ShowComment = ({
  messages,
  setSort,
  fetchSearch,
  fetchMessage,
}: propsTypes.ShowCommentPropType) => {
  const [searchInput, setSearchInput] = useState('');
  const nsize = useWindowSize();

  const SortClick = (sort: string) => {
    AddClassSortOn(sort);
    if (fetchMessage) fetchMessage(sort.toLowerCase());
    setSort(sort.toLowerCase());
  };

  const onClickSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    if (fetchSearch) fetchSearch(searchInput, 50, 0);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <Section.ThirdSection bgsrc={Main_firefly.src}>
      <Section.TitleBox>
        <Section.ThirdHeaderText>
          <Section.ThirdHeaderTextStrong>
            전세계 각지에서
          </Section.ThirdHeaderTextStrong>
          <br />
          많은 사람들이 응원글 작성에
          {nsize.width <= 820 && <br />} 참여하고 있어요
        </Section.ThirdHeaderText>
      </Section.TitleBox>
      <Section.CommentWrapper>
        <Section.CommentHeader>
          <Section.CommentSortButton
            id="best"
            className="SortOn sort"
            onClick={() => SortClick('Best')}
          >
            Best
          </Section.CommentSortButton>
          <Section.DividerLine orientation="vertical" />
          <Section.CommentSortButton
            id="new"
            className="sort"
            onClick={() => SortClick('New')}
          >
            New
          </Section.CommentSortButton>
          <Section.Search>
            <form onSubmit={onClickSearch}>
              <Section.SearchInput
                value={searchInput}
                onChange={onChangeSearchInput}
                variant="unstyled"
                placeholder="작성자 검색"
              />
              <Section.SearchIcon onClick={onClickSearch}>
                <FaSearch color="white" />
              </Section.SearchIcon>
            </form>
          </Section.Search>
        </Section.CommentHeader>
        <Section.ShowCommentWrapper id="CommentStack">
          <Section.StyledScrollbar>
            {Array.isArray(messages) &&
              messages.map((v: dataTypes.MessageType) => (
                <MessageComponent key={v.messageId} message={v} />
              ))}
          </Section.StyledScrollbar>
        </Section.ShowCommentWrapper>
      </Section.CommentWrapper>
    </Section.ThirdSection>
  );
};

export default ShowComment;
