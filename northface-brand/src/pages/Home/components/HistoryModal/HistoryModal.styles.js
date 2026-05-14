import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkBg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  ${({ theme }) => theme.media.tablet} {
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
`;

export const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px 80px 60px;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr 360px;
    gap: 40px;
    padding: 60px 40px;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: 24px;
    padding: 60px 20px 20px;
  }
`;

/* ===== 좌측 메인 패널 ===== */

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  padding-right: 20px;
`;

export const MainImageBox = styled.div`
  width: 100%;
  max-width: 640px;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 48px;
  background: rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 24px;
    border-radius: 12px;
  }
`;

export const MainImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);

  span {
    font-family: ${({ theme }) => theme.fonts.en};
    font-size: 28px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  }
`;

export const YearLarge = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 120px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: -0.03em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  margin-bottom: 32px;

  ${({ theme }) => theme.media.desktop} {
    font-size: 96px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 56px;
    margin-bottom: 16px;
  }
`;

export const YearDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  color: rgba(255, 255, 255, 0.85);
  max-width: 640px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

/* ===== 우측 타임라인 패널 ===== */

export const RightPanel = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  padding: 20px 30px 20px 30px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }

  ${({ theme }) => theme.media.tablet} {
    height: auto;
    max-height: 200px;
    padding: 12px;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  width: 1px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 10%,
    rgba(255, 255, 255, 0.3) 90%,
    transparent 100%
  );

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 100px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
    padding-bottom: 12px;
  }
`;

export const TimelineCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};

  ${({ $active }) =>
    !$active &&
    `
    &:hover {
      transform: translateX(-4px);
    }
  `}
`;

export const TimelineCardImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $active }) => ($active ? '3 / 2' : '16 / 11')};
  max-width: ${({ $active }) => ($active ? '180px' : 'none')};
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: ${({ $active }) => ($active ? 'flex-start' : 'stretch')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.media.tablet} {
    width: 200px;
    flex-shrink: 0;
    max-width: ${({ $active }) => ($active ? '140px' : '200px')};
  }
`;

export const TimelineCardImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
`;

export const TimelineCardYear = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
`;

export const TimelineCardYearActive = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
  z-index: 2;
  letter-spacing: -0.01em;
`;
