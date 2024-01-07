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

  const commentWrapperRef = useRef<HTMLDivElement>(null);
  const fetchMessages = useCallback(
    async (sortType = 'new', reset = false) => {
      if (isLoading || (reset && currentPage !== 1)) return;
      setIsLoading(true);
      try {
        const newComments = await fetchComments(
          searchInput,
          sortType,
          20,
          reset ? 0 : currentPage - 1,
        );
        // 모든 댓글 불러옴
        if (newComments.length === 0) {
          setIsLoading(false);
          return;
        }
        setComments(prev => (reset ? newComments : [...prev, ...newComments]));
        setCurrentPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    },
    [searchInput, currentPage, isLoading],
  );

  useEffect(() => {
    fetchMessages('new', true);
    console.log(comments);
  }, []);

  useEffect(() => {
    const commentWrapper = commentWrapperRef.current;

    // 스크롤 이벤트 핸들링
    const handleScrollEvent = () => {
      const { scrollTop, scrollHeight, clientHeight } = commentWrapper;

      // 스크롤 끝에 도달하면 추가 데이터 요청
      if (scrollHeight - scrollTop - clientHeight < 1 && !isLoading) {
        fetchMessages();
      }
    };

    commentWrapper.addEventListener('scroll', handleScrollEvent);
    return () => {
      return commentWrapper.removeEventListener('scroll', handleScrollEvent);
    };
  }, [isLoading, fetchMessages]);

  const SortClick = useCallback(
    (sort: string) => {
      setCurrentPage(1);
      setComments([]);
      fetchMessages(sort.toLowerCase(), true);
    },
    [fetchMessages],
  );

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
