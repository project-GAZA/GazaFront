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

  // 메시지 불러오기 함수
  const fetchMessages = useCallback(
    async (sortType = 'new', reset = false) => {
      if (isLoading || (!reset && totalMessages <= 1000)) return;
      setIsLoading(true);
      try {
        const newComments = await fetchComments(searchInput, sortType, 100, 0);
        setComments(reset ? newComments : [...comments, ...newComments]);
        setCurrentPage(prevPage => prevPage + (reset ? 0 : 1));
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    },
    [searchInput, currentPage, isLoading, totalMessages, comments],
  );

  // 초기 메시지 로드
  useEffect(() => {
    fetchMessages('best', true);
  }, []);

  // 총 메시지 개수 가져오기
  /*
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

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (!commentWrapperRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = commentWrapperRef.current;
    if (scrollHeight - scrollTop - clientHeight < 50 && !isLoading) {
      fetchMessages();
    }
  }, [isLoading, fetchMessages]);

  // 스크롤 이벤트 리스너 등록
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
  */

  // 정렬 및 검색 이벤트 핸들러
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
