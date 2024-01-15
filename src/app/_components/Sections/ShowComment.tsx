'use clients';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { dataTypes, propsTypes } from '@/types';
import Main_firefly from '@/assets/svg/Main_firefly.jpg';
import MessageComponent from '@/app/_components/MessageComponent';
import { fetchComments } from '@/utils/api';
import Section from './section.style';

const ShowComment = ({ ShowCommentText }: propsTypes.ShowCommentPropType) => {
  const [searchInput, setSearchInput] = useState('');
  const [comments, setComments] = useState<dataTypes.MessageType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState('best');

  const commentWrapperRef = useRef<HTMLDivElement>(null);
  const fetchMessages = useCallback(
    async (selectedSortType = 'best', reset = false) => {
      if (isLoading || (reset && currentPage !== 1)) return;
      setIsLoading(true);

      try {
        const newComments = await fetchComments(
          searchInput,
          selectedSortType,
          20,
          currentPage - 1,
        );

        if (newComments.length === 0) {
          setIsLoading(false);
          return;
        }

        setComments(prev => (reset ? newComments : [...prev, ...newComments]));
        if (reset) {
          setCurrentPage(2);
        } else {
          setCurrentPage(prevPage => prevPage + 1);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    },
    [searchInput, currentPage, isLoading],
  );

  useEffect(() => {
    fetchMessages('best', true);
  }, []);

  useEffect(() => {
    const commentWrapper = commentWrapperRef.current;

    const handleScrollEvent = () => {
      const { scrollTop, scrollHeight, clientHeight } = commentWrapper;

      if (scrollHeight - scrollTop - clientHeight < 100 && !isLoading) {
        fetchMessages(sortType);
      }
    };

    commentWrapper.addEventListener('scroll', handleScrollEvent);
    return () =>
      commentWrapper.removeEventListener('scroll', handleScrollEvent);
  }, [isLoading, fetchMessages, sortType]);

  function SortClick(sort) {
    const lowerCaseSort = sort.toLowerCase();
    setSortType(lowerCaseSort);
    setCurrentPage(1);
    setComments([]);
    fetchMessages(lowerCaseSort, true);
  }

  useEffect(() => {
    if (sortType) {
      fetchMessages(sortType, true);
    }
  }, [sortType, fetchMessages]);

  const onSubmitSearch = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault();
      setCurrentPage(1);
      setComments([]);
      fetchMessages('best', true);
    },
    [fetchMessages],
  );

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
            className={sortType === 'best' ? 'SortOn sort' : 'sort'}
            onClick={() => SortClick('Best')}
          >
            Best
          </Section.CommentSortButton>
          <Section.DividerLine orientation="vertical" />
          <Section.CommentSortButton
            className={sortType === 'new' ? 'SortOn sort' : 'sort'}
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
          <Section.StyledScrollbar ref={commentWrapperRef}>
            {Array.isArray(comments) &&
              comments.map((message: dataTypes.MessageType) => (
                <MessageComponent key={message.messageId} message={message} />
              ))}
          </Section.StyledScrollbar>
        </Section.ShowCommentWrapper>
      </Section.CommentWrapper>
    </Section.ThirdSection>
  );
};

export default ShowComment;
