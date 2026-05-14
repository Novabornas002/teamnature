import styled from 'styled-components';

export const EsgWrapper = styled.section`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 140px 0 160px;
  overflow: hidden;

  ${({ theme }) => theme.media.tablet} {
    padding: 80px 0 100px;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const Header = styled.div`
  margin-bottom: 80px;
  max-width: 900px;

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 48px;
  }
`;

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 32px;

  ${({ theme }) => theme.media.desktop} {
    font-size: 52px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
    margin-bottom: 24px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
  }
`;

/* ===== 슬라이더 ===== */

export const CardSlider = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  /* overflow 제거 - 화살표가 보이도록 */
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;  /* 시작부터 가운데 정렬 */
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* currentIndex에 따라 좌우로 한 칸씩 이동 */
  transform: translateX(
    calc((var(--current-index, 2) - 2) * (var(--card-width) + 24px) * -1)
  );

  --card-width: 320px;

  & > * {
    flex: 0 0 var(--card-width);
  }

  ${({ theme }) => theme.media.desktop} {
    --card-width: 280px;
  }

  ${({ theme }) => theme.media.tablet} {
    --card-width: 240px;
    gap: 16px;
  }
`;

export const Card = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transition.base};

  &:hover {
    transform: translateY(-4px);
  }

  ${({ theme }) => theme.media.tablet} {
    aspect-ratio: 4 / 3;
  }
`;

export const CardImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #444444;
  z-index: 1;
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.25) 35%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.75) 100%
  );
  z-index: 2;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.tablet} {
    padding: 20px;
  }
`;

export const CardLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 8px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.caption};
  }
`;

export const CardValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop} {
    font-size: 30px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 28px;
  }
`;

export const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.caption};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  color: rgba(255, 255, 255, 0.85);
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    font-size: 11px;
    text-align: left;
  }
`;

/* ===== 좌우 화살표 버튼 ===== */

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: -64px;' : 'right: -64px;')}

  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${({ theme }) => theme.media.desktop} {
    ${({ $position }) => ($position === 'left' ? 'left: -48px;' : 'right: -48px;')}
  }

  ${({ theme }) => theme.media.tablet} {
    width: 40px;
    height: 40px;
    ${({ $position }) => ($position === 'left' ? 'left: 0;' : 'right: 0;')}
  }
`;