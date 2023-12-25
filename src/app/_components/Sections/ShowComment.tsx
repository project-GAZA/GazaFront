'use clients';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

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
  fetchMessage,
  ShowCommentText,
}: propsTypes.ShowCommentPropType) => {
  const [searchInput, setSearchInput] = useState('');

  const SortClick = (sort: string) => {
    AddClassSortOn(sort);
    fetchMessage('', sort.toLowerCase(), 100, 0);
  };

  const onSubmitSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    fetchMessage(searchInput, 'new', 100, 0);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <Section.ThirdSection bgsrc={Main_firefly.src}>
      <Section.TitleBox>
        <Section.ThirdHeaderText
          dangerouslySetInnerHTML={{ __html: ShowCommentText.HeaderText }}
        />
      </Section.TitleBox>
      <Section.CommentWrapper>
        <Section.CommentHeader>
          <Section.CommentSortButton
            className="SortOn sort"
            onClick={() => SortClick('Best')}
          >
            Best
          </Section.CommentSortButton>
          <Section.DividerLine orientation="vertical" />
          <Section.CommentSortButton
            className="sort"
            onClick={() => SortClick('New')}
          >
            New
          </Section.CommentSortButton>
          <Section.Search>
            <form onSubmit={onSubmitSearch}>
              <Section.SearchInput
                value={searchInput}
                onChange={onChangeSearchInput}
                variant="unstyled"
                placeholder={ShowCommentText.SearchPlaceholder}
              />
              <Section.SearchIcon onClick={onSubmitSearch}>
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
