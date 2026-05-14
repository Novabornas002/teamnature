import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

import {
  NewsroomWrapper,
  NewsroomInner,
  PageHeader,
  Title,
  Divider,
  ContentArea,
  ContentRow,
  VisualCard,
  VisualImage,
  NewsItem,
  NewsItemCompact,
  NewsItemHeader,
  NewsItemTitle,
  NewsItemCopy,
  NewsItemLink,
  NewsItemDate,
  NewsItemList,
  NewsItemListItem,
  Pagination,
  PageNumber,
} from "./NewsroomSub.styles";

import newsroom1 from "../../assets/images/newsroom-1.jpg";
import newsroom2 from "../../assets/images/newsroom-2.jpg";

function NewsroomSub() {
  const [activePage, setActivePage] = useState(1);

  return (
    <>
    <Header />
    <NewsroomWrapper>
      <NewsroomInner>
        <PageHeader>
          <Title>Newsroom</Title>
        </PageHeader>

        <Divider />

        <ContentArea key={activePage}>
          <ContentRow>
            <VisualCard>
              <VisualImage src={newsroom1} alt="Newsroom 1" />
            </VisualCard>
            <NewsItem>
              <NewsItemHeader>
                <NewsItemTitle>
                  노스페이스 키즈 K-POP 댄스 클래스 이벤트 안내
                </NewsItemTitle>
                <NewsItemDate>2026-4-20</NewsItemDate>
              </NewsItemHeader>
              <NewsItemCopy>
                안녕하세요. 노스페이스 온라인 스토어입니다. 노스페이스 키즈와
                함께하는 특별한 체험 프로그램,
                <br /> K-POP 댄스 클래스 이벤트를 진행합니다. 아이들이 즐겁게
                참여할 수 있는 이번 프로그램은 전문 <br />
                댄스팀과 함께하는 체험형 클래스 형태로 운영됩니다. 자세한 일정
                및 참여 방법은 아래 이벤트 페 <br /> 이지를 통해 확인
                부탁드립니다.
              </NewsItemCopy>
              <NewsItemLink href="#">
                키즈 댄스 클래스 OPEN | 참여 방법 안내
              </NewsItemLink>
            </NewsItem>
          </ContentRow>

          <ContentRow>
            <VisualCard>
              <VisualImage src={newsroom2} alt="Newsroom 2" />
            </VisualCard>
            <NewsItemCompact>
              <NewsItemHeader>
                <NewsItemTitle>2026 년 가정의 달 프로모션 안내</NewsItemTitle>
                <NewsItemDate>2026-4-20</NewsItemDate>
              </NewsItemHeader>
              <NewsItemList>
                <NewsItemListItem>
                  <strong>[프로모션 기간]</strong> 2026년 4월 13일(월) ~ 2026년
                  5월 17일(일)
                </NewsItemListItem>
                <NewsItemListItem $spaced>
                  <strong>[프로모션 혜택]</strong>
                </NewsItemListItem>
                <NewsItemListItem>1. 더블 마일리지 적립</NewsItemListItem>
                <NewsItemListItem>2. 사은품 증정</NewsItemListItem>
                <NewsItemListItem>
                  ① 10만원 이상 구매 고객: NUPTSE MOLD POUCH 또는 타프랜팩 S
                  (랜덤 증정)
                </NewsItemListItem>
                <NewsItemListItem>
                  ② 20만원 이상 구매 고객: MULTI CROSS BAG MINI 증정
                </NewsItemListItem>
                <NewsItemListItem>
                  * 사은품은 한정 수량으로 조기 소진 시 종료될 수 있습니다.
                </NewsItemListItem>
              </NewsItemList>
            </NewsItemCompact>
          </ContentRow>
        </ContentArea>

        <Pagination>
          {[...Array(9)].map((_, index) => (
            <PageNumber
              key={index}
              type="button"
              $active={activePage === index + 1}
              aria-current={activePage === index + 1 ? "page" : undefined}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </PageNumber>
          ))}
        </Pagination>
      </NewsroomInner>
    </NewsroomWrapper>
    <Footer />
    </>
  );
}

export default NewsroomSub;
