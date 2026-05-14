import { useNavigate } from 'react-router-dom';
import tech1 from '../../../../../assets/images/tech-1.jpg';
import tech2 from '../../../../../assets/images/tech-2.jpg';
import tech3 from '../../../../../assets/images/tech-3.jpg';
import tech4 from '../../../../../assets/images/tech-4.jpg';
import tech5 from '../../../../../assets/images/tech-5.jpg';

import {
  TechWrapper,
  Container,
  LogoMark,
  SectionTitle,
  SliderWrapper,
  SliderTrack,
  TechCard,
  TechImage,
  TechLabel,
  ViewAllButton,
} from './TechnologySection.styles';

const TECH_DATA = [
  { id: 1, label: 'Dry Vent', image: tech1 },
  { id: 2, label: 'K-ECO TECH', image: tech2 },
  { id: 3, label: 'V-MOTION / T-BALL', image: tech3 },
  { id: 4, label: 'FutureLight', image: tech4 },
  { id: 5, label: 'Windstopper', image: tech5 },
];

function TechnologySection() {
   const navigate = useNavigate(); 
  const repeatedData = [...TECH_DATA, ...TECH_DATA];

  return (
    <TechWrapper id="technology-section">
      <Container>
        <LogoMark>THE NORTH FACE</LogoMark>
        <SectionTitle>Our technologies</SectionTitle>
      </Container>

      <SliderWrapper>
        <SliderTrack>
          {repeatedData.map((item, idx) => (
            <TechCard key={`${item.id}-${idx}`}>
              <TechImage style={{ backgroundImage: `url(${item.image})` }} />
              <TechLabel>{item.label}</TechLabel>
            </TechCard>
          ))}
        </SliderTrack>
      </SliderWrapper>

      <Container>
        <ViewAllButton onClick={() => navigate('/technology')}>
  전체보기
</ViewAllButton>
      </Container>
    </TechWrapper>
  );
}

export default TechnologySection;