'use clients';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { dataTypes, propsTypes } from '@/types';
import Main_firefly from '@/assets/svg/Main_firefly.jpg';
import MessageComponent from '@/app/_components/MessageComponent';
import { fetchComments, fetchGetMessageCount } from '@/utils/api';
import Section from './section.style';

const ShowComment = ({ ShowCommentText }: propsTypes.ShowCommentPropType) => {
  const [searchInput, setSearchInput] = useState('');
  const [comments, setComments] = useState<dataTypes.MessageType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMessages, setTotalMessages] = useState(0);
  const commentWrapperRef = useRef<HTMLDivElement>(null);

  const fetchMessages = useCallback(
    async (sortType = 'new', reset = false) => {
      if (isLoading) return;
      setIsLoading(true);
      try {
        const newComments = await fetchComments(
          searchInput,
          sortType,
          20,
          reset ? 0 : currentPage - 1,
        );
        // 서버에서 더 이상의 댓글이 없다는 정보를 반환하는 경우 처리
        if (newComments.length === 0) {
          // 추가 로딩 중지나 표시를 위한 처리
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
  }, []);

  useEffect(() => {
    const getTotalMessages = async () => {
      try {
        const countData = await fetchGetMessageCount();
        setTotalMessages(countData.count);
      } catch (error) {
        console.error(error);
      }
    };
    getTotalMessages();
  }, []);

  const handleScroll = useCallback(() => {
    if (!commentWrapperRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = commentWrapperRef.current;

    if (scrollHeight - scrollTop - clientHeight < 50 && !isLoading) {
      fetchMessages();
    }
  }, [isLoading, fetchMessages]);

  useEffect(() => {
    const commentWrapper = commentWrapperRef.current;
    if (commentWrapper) {
      commentWrapper.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (commentWrapper) {
        commentWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

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
      fetchMessages('new', true);
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
        <Section.ShowCommentWrapper ref={commentWrapperRef} id="CommentStack">
          <Section.StyledScrollbar>
            {comments.map((message: dataTypes.MessageType) => (
              <MessageComponent key={message.messageId} message={message} />
            ))}
          </Section.StyledScrollbar>
        </Section.ShowCommentWrapper>
      </Section.CommentWrapper>
    </Section.ThirdSection>
  );
};

export default ShowComment;
