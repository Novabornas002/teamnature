import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 120px 0 100px;

  ${({ theme }) => theme.media.tablet} {
    padding: 80px 0 60px;
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

export const SectionHeader = styled.div`
  margin-bottom: 60px;

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 56px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 12px;

  ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodyLg};
  color: ${({ theme }) => theme.colors.textSecondary};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const BannerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.media.tablet} {
    gap: 16px;
  }
`;

export const Banner = styled.button`
  position: relative;
  width: 75%;
  height: 220px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: none;
  padding: 0;
  align-self: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};
  transition: transform ${({ theme }) => theme.transition.base};

  &:hover {
    transform: scale(1.01);
  }

  ${({ theme }) => theme.media.desktop} {
    width: 85%;
    height: 180px;
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 140px;
    align-self: stretch;
  }
`;

export const BannerImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.6s ease;

  ${Banner}:hover & {
    transform: scale(1.05);
  }
`;

export const BannerLabel = styled.span`
  position: absolute;
  bottom: 24px;
  right: 32px;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.01em;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.media.tablet} {
    font-size: 22px;
    bottom: 16px;
    right: 20px;
  }
`;