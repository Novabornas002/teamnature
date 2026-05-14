import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import productActivity from '../../../../../assets/images/product-activity.jpg';
import productFootwear from '../../../../../assets/images/product-footwear.jpg';
import productCamping from '../../../../../assets/images/product-camping.jpg';
import productWhitelabel from '../../../../../assets/images/product-whitelabel.jpg';

import {
  ProductsWrapper,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  BannerList,
  Banner,
  BannerImage,
  BannerLabel,
} from './ProductsSection.styles';

const PRODUCTS_DATA = [
  {
    id: 1,
    label: 'Activity',
    image: productActivity,
    path: '/products/activity',
    align: 'right',
  },
  {
    id: 2,
    label: 'Footwear',
    image: productFootwear,
    path: '/products/footwear',
    align: 'left',
  },
  {
    id: 3,
    label: 'Camping',
    image: productCamping,
    path: '/products/camping',
    align: 'right',
  },
  {
    id: 4,
    label: 'White Label',
    image: productWhitelabel,
    path: '/products/whitelabel',
    align: 'left',
  },
];

function ProductsSection() {
  const navigate = useNavigate();

  return (
    <ProductsWrapper id="products-section">
      <Container>
        <SectionHeader>
          <SectionTitle>PRODUCTS</SectionTitle>
          <SectionSubtitle>기능성과 스타일을 모두 담은 노스페이스 컬렉션</SectionSubtitle>
        </SectionHeader>

        <BannerList>
          {PRODUCTS_DATA.map((item, idx) => (
            <Banner
              key={item.id}
              $align={item.align}
              onClick={() => navigate(item.path)}
              as={motion.button}
              initial={{ opacity: 0, x: item.align === 'right' ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <BannerImage style={{ backgroundImage: `url(${item.image})` }} />
              <BannerLabel>{item.label}</BannerLabel>
            </Banner>
          ))}
        </BannerList>
      </Container>
    </ProductsWrapper>
  );
}

export default ProductsSection;