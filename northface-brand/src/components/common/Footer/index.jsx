import {
  FooterWrapper,
  FooterInner,
  FooterTop,
  LogoArea,
  LogoText,
  LinkColumns,
  LinkColumn,
  ColumnTitle,
  LinkList,
  LinkItem,
  FooterBottom,
  ContactArea,
  ContactRow,
  ContactLabel,
  ContactValue,
  FamilySite,
  FamilySelect,
  Copyright,
  Address,
  SnsList,
  SnsItem,
} from './Footer.styles';

const COMPANY_LINKS = [
  { label: '회사소개', path: '#' },
  { label: '개인정보처리방침', path: '#' },
  { label: '고객센터', path: '#' },
  { label: '공지사항', path: '#' },
  { label: '매장안내', path: '#' },
  { label: '채용 게시판', path: '#' },
];

const FAMILY_SITES = [
  { label: 'FAMILY SITE', value: '' },
  { label: 'THE NORTH FACE GLOBAL', value: 'https://www.thenorthface.com' },
  { label: 'THE NORTH FACE KOREA', value: 'https://www.thenorthfacekorea.co.kr' },
  { label: 'TIMBERLAND', value: '#' },
  { label: 'VANS', value: '#' },
];

function Footer() {
  const handleFamilySite = (e) => {
    const url = e.target.value;
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <FooterWrapper>
      <FooterInner>
        <FooterTop>
          <LogoArea>
            <LogoText>THE NORTH FACE</LogoText>
          </LogoArea>

          <LinkColumns>
            <LinkColumn>
              <ColumnTitle>COMPANY</ColumnTitle>
              <LinkList>
                {COMPANY_LINKS.map((item) => (
                  <LinkItem key={item.label}>
                    <a href={item.path}>{item.label}</a>
                  </LinkItem>
                ))}
              </LinkList>
            </LinkColumn>
          </LinkColumns>
        </FooterTop>

        <FooterBottom>
          <ContactArea>
            <ContactRow>
              <ContactLabel>고객센터</ContactLabel>
              <ContactValue className="phone">1800-6166</ContactValue>
            </ContactRow>
            <ContactRow>
              <ContactLabel>상담시간</ContactLabel>
              <ContactValue>평일 10:00 — 17:00</ContactValue>
            </ContactRow>
            <ContactRow>
              <ContactLabel>점심시간</ContactLabel>
              <ContactValue>12:00 — 13:00 (토, 일, 공휴일 휴무)</ContactValue>
            </ContactRow>
          </ContactArea>

          <FamilySite>
            <FamilySelect onChange={handleFamilySite} defaultValue="">
              {FAMILY_SITES.map((site, idx) => (
                <option key={idx} value={site.value} disabled={idx === 0}>
                  {site.label}
                </option>
              ))}
            </FamilySelect>
            <SnsList>
              <SnsItem href="#" aria-label="Instagram">IG</SnsItem>
              <SnsItem href="#" aria-label="YouTube">YT</SnsItem>
              <SnsItem href="#" aria-label="Facebook">FB</SnsItem>
            </SnsList>
          </FamilySite>
        </FooterBottom>

        <Address>
          <Copyright>
            Copyright © THE NORTH FACE KOREA, LTD. All Rights Reserved.
          </Copyright>
          <p>
            (주) 영원아웃도어 ㅣ 대표이사 : 성기학 ㅣ 사업자 등록번호 : 110-81-27101
            ㅣ 통신판매업 신고 : 2013-경기성남-0984 ㅣ Email : info@northface.co.kr
          </p>
          <p>
            반송지 주소 : 경기도 이천시 마장면 프리미엄 아울렛로33-20 ㅣ 개인정보보호책임자 : 김은영
          </p>
          <p>이 사이트는 포트폴리오용으로 제작되었습니다.</p>
        </Address>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;