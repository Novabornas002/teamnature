import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import esg1 from '../../../../assets/images/esg-1.png';
import esg2 from '../../../../assets/images/esg-2.png';
import esg3 from '../../../../assets/images/esg-3.png';
import esg4 from '../../../../assets/images/esg-4.png';
import esg5 from '../../../../assets/images/esg-5.png';

import {
  EsgWrapper,
  Container,
  Header,
  MainTitle,
  Description,
  CardSlider,
  SliderTrack,
  Card,
  CardImage,
  CardOverlay,
  CardContent,
  CardLabel,
  CardValue,
  CardDesc,
  ArrowButton,
} from './ESG.styles';

const ESG_DATA = [
  {
    id: 1,
    image: esg1,
    label: '재활용/선호 소재 비율',
    value: '64%',
    desc: 'VF 그룹은 2024년 기준, 재활용·재생 등\n‘선호 소재(preferred materials)’ 사용 비율을 64%까지 끌어올렸습니다.\n노스페이스는 이 안에서 특히\n폴리에스터의 95%, 나일론의 80%를 선호 소재로 전환했습니다.',
  },
  {
    id: 2,
    image: esg2,
    label: '온실가스 감축 목표·진행률',
    value: '46%',
    desc: 'VF는 2030년까지 스코프 1·2 절대 온실가스 배출량을 55% 감축하는\n목표를 세웠습니다. (2017년 기준)\n2024년 기준 이미 46% 감축을 달성해\n목표에 근접한 상태입니다.',
  },
  {
    id: 3,
    image: esg3,
    label: '재생에너지 사용량',
    value: '97,094,050 kWh',
    desc: '노스페이스를 포함한 VF의 공급망·운영 파트너는\n약 9,700만 kWh 규모의 재생에너지를 사용하고 있습니다.\n에너지 효율 개선과 재생에너지 전환을 통해\n공급망 전체의 탄소 발자국을 줄여가고 있습니다.',
  },
  {
    id: 4,
    image: esg4,
    label: 'RDS 인증 다운 목표',
    value: '100%',
    desc: '노스페이스는 모든 다운 제품을 100%\nResponsible Down Standard(RDS) 인증 다운으로\n전환하겠다는 목표를 세웠습니다.\n동물 복지와 추적 가능한 공급망을 갖춘 다운만 사용하도록\n표준을 강화하고 있습니다.',
  },
  {
    id: 5,
    image: esg5,
    label: '기후 목표 기준 연도',
    value: '2030',
    desc: '2030년까지 스코프 1·2 배출량 55% 감축,\n공급망 감축 등을 포함한 기후 목표를 운영하고 있습니다.\n장기적인 ESG 로드맵을 통해\n제품·소재·공급망 전반의 지속가능성을 단계적으로 높여가고 있습니다.',
  },
];

const VISIBLE_COUNT = 3;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

function ESG() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [currentIndex, setCurrentIndex] = useState(2);
  const maxIndex = ESG_DATA.length - 1;
  const minIndex = 0;

const handlePrev = () => {
  setCurrentIndex((prev) => Math.max(minIndex, prev - 1));
};

const handleNext = () => {
  setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
};

  return (
    <EsgWrapper ref={sectionRef}>
      <Container>
        <Header>
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <MainTitle>
              SUSTAINABILITY FOR<br />
              EVERY EXPLORATION
            </MainTitle>
            <Description>
              노스페이스는 과학 기반 목표에 따라 친환경 소재 사용과 탄소 감축을 단계적으로 확대하고 있습니다.<br />
              재활용·재생 원단, 수선·회수 프로그램 등 순환 시스템을 통해 제품의 생애를 더 길게 설계합니다.<br />
              이는 단순한 캠페인을 넘어, 우리가 만드는 모든 제품과 공급망에 적용되는 지속가능한 표준입니다.
            </Description>
          </motion.div>
        </Header>

        <CardSlider>
          <ArrowButton
            $position="left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="이전"
          >
            ◀
          </ArrowButton>

          <SliderTrack
  style={{ '--current-index': currentIndex }}
>
            {ESG_DATA.map((item, idx) => (
              <Card
                key={item.id}
                as={motion.div}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                custom={idx + 1}
              >
                <CardImage style={{ backgroundImage: `url(${item.image})` }} />
                <CardOverlay />
                <CardContent>
                  <div>
                    <CardLabel>{item.label}</CardLabel>
                    <CardValue>{item.value}</CardValue>
                  </div>
                  <CardDesc>
                    {item.desc.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.desc.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </CardDesc>
                </CardContent>
              </Card>
            ))}
          </SliderTrack>

          <ArrowButton
            $position="right"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="다음"
          >
            ▶
          </ArrowButton>
        </CardSlider>
      </Container>
    </EsgWrapper>
  );
}

export default ESG;