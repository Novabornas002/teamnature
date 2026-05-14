import styled, { keyframes } from 'styled-components';

/* 무한 슬라이드 애니메이션 — 카드 전체 길이의 절반만큼 이동
   (데이터를 두 번 반복했으므로, 절반 이동 후 처음 자리로 돌아오면 자연스럽게 이어짐) */
const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const TechWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 80px 0 120px;

  ${({ theme }) => theme.media.tablet} {
    padding: 60px 0 80px;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const LogoMark = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 60px;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.media.tablet} {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 40px;
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 24px;
  width: max-content;
  animation: ${slideLeft} 50s linear infinite;

  /* 호버하면 일시정지 */
  &:hover {
    animation-play-state: paused;
  }

  ${({ theme }) => theme.media.tablet} {
    gap: 16px;
    animation-duration: 25s;
  }
`;

export const TechCard = styled.div`
  flex: 0 0 320px;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.media.tablet} {
    flex: 0 0 220px;
    height: 180px;
  }
`;

export const TechImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TechLabel = styled.span`
  position: absolute;
  bottom: 16px;
  left: 20px;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);

  ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    bottom: 12px;
    left: 16px;
  }
`;

export const ViewAllButton = styled.button`
  display: inline-block;
  padding: 14px 48px;
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 32px;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    background: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;