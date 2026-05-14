import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray100};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 60px 0 40px;

  ${({ theme }) => theme.media.tablet} {
    padding: 40px 0 24px;
  }
`;

export const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 32px;
    padding-bottom: 32px;
  }
`;

export const LogoArea = styled.div`
  flex-shrink: 0;
`;

export const LogoText = styled.div`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LinkColumns = styled.div`
  display: flex;
  gap: 80px;

  ${({ theme }) => theme.media.tablet} {
    gap: 40px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 8px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LinkItem = styled.li`
  a {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 0 24px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
`;

export const ContactLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  color: ${({ theme }) => theme.colors.textSecondary};
  min-width: 60px;
`;

export const ContactValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  color: ${({ theme }) => theme.colors.textPrimary};

  &.phone {
    font-family: ${({ theme }) => theme.fonts.en};
    font-size: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: ${({ theme }) => theme.letterSpacing.tight};
  }
`;

export const FamilySite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  ${({ theme }) => theme.media.tablet} {
    align-items: flex-start;
    width: 100%;
  }
`;

export const FamilySelect = styled.select`
  min-width: 200px;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23333' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray500};
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const SnsList = styled.div`
  display: flex;
  gap: 12px;
`;

export const SnsItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Address = styled.div`
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.textTertiary};
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.textSecondary} !important;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 8px;
`;