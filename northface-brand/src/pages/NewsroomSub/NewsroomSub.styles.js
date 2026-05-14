import styled from "styled-components";

export const NewsroomWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 160px 20px 120px;
  background-color: #f4f5f6;
  font-family:
    "Pretendard",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    sans-serif;
`;

export const NewsroomInner = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  color: #111111;
  line-height: 1.05;
  font-family: "Pretendard", sans-serif;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
  margin: 32px 0;
`;

export const ContentArea = styled.div`
  display: grid;
  gap: 32px;
`;

export const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 32px;
  align-items: stretch;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const VisualCard = styled.div`
  width: 100%;
  min-height: 420px;
  overflow: hidden;
  border-radius: 24px;
  background: #f8f8f8;
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.06);
`;

export const VisualImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const NewsItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 32px;
  border-radius: 20px;
  background: #fafafa;
  border: 1px solid #ececec;
  min-height: 420px;
  font-family: "Pretendard", sans-serif;
`;

export const NewsItemCompact = styled(NewsItem)`
  justify-content: flex-start;
  gap: 54px;
`;

export const NewsItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
`;

export const NewsItemTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #111111;
  line-height: 1.3;
  font-family: "Pretendard", sans-serif;
`;

export const NewsItemDate = styled.span`
  color: #7d8186;
  font-size: 14px;
  white-space: nowrap;
`;

export const NewsItemCopy = styled.p`
  margin: 0;
  color: #4f5358;
  font-size: 15px;
  line-height: 1.7;
  font-family: "Pretendard", sans-serif;
`;

export const NewsItemLink = styled.a`
  color: #111111;
  font-weight: 700;
  text-decoration: underline;
  font-size: 15px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const NewsItemList = styled.ul`
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #4f5358;
  font-size: 15px;
  line-height: 1.7;
  font-family: "Pretendard", sans-serif;
`;

export const NewsItemListItem = styled.li`
  margin-bottom: ${({ $spaced }) => ($spaced ? "12px" : "0")};

  & strong {
    color: #111111;
    font-weight: 700;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 28px;
  padding-top: 12px;
`;

export const PageNumber = styled.button`
  border: none;
  background: none;
  color: ${({ $active }) => ($active ? "#111111" : "#9b9ea4")};
  font-size: 16px;
  cursor: pointer;
  padding: 4px 6px;
  min-width: 24px;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  &:hover {
    color: #111111;
  }
`;
