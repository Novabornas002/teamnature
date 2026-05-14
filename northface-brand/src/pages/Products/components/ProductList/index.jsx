import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import "./ProductList.styles.css";

import best1 from "../../../../assets/images/best-1.jpg";
import best2 from "../../../../assets/images/best-2.jpg";
import best3 from "../../../../assets/images/best-3.jpg";
import best4 from "../../../../assets/images/best-4.jpg";

import jacket1 from "../../../../assets/images/jacket-1.jpg";
import jacket2 from "../../../../assets/images/jacket-2.jpg";
import jacket3 from "../../../../assets/images/jacket-3.jpg";
import jacket4 from "../../../../assets/images/jacket-4.jpg";
import jacket5 from "../../../../assets/images/jacket-5.jpg";
import jacket6 from "../../../../assets/images/jacket-6.jpg";
import jacket7 from "../../../../assets/images/jacket-7.jpg";
import jacket8 from "../../../../assets/images/jacket-8.jpg";

import ProductBanner from "../ProductBanner";
import ProductDetail from "../ProductDetail";

import footwear1 from "../../../../assets/images/footwear-1.jpg";
import footwear2 from "../../../../assets/images/footwear-2.png";
import footwear3 from "../../../../assets/images/footwear-3.png";
import footwear4 from "../../../../assets/images/footwear-4.png";

import camping1 from "../../../../assets/images/Camping-1.jpg";
import camping2 from "../../../../assets/images/Camping-2.jpg";
import camping3 from "../../../../assets/images/Camping-3.jpg";
import camping4 from "../../../../assets/images/Camping-4.jpg";

import white1 from "../../../../assets/images/whitelabel-1.png";
import white2 from "../../../../assets/images/whitelabel-2.png";
import white3 from "../../../../assets/images/whitelabel-3.jpg";
import white4 from "../../../../assets/images/whitelabel-4.jpg";

function ProductCard({ product, isBest }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-box">
        {isBest && (
          <span className={`rank-badge ${product.rank === 1 ? "rank-first" : ""}`}>
            {product.rank}
          </span>
        )}

        <img src={product.image} alt={product.name} />

        {product.badge && (
          <span className={`product-badge ${product.badge === "SOLD OUT" ? "sold-out" : ""}`}>
            {product.badge}
          </span>
        )}

        <div className="product-overlay">
          <span>VIEW MORE</span>
        </div>
      </div>

      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </Link>
  );
}

function ProductList({ currentCategory }) {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");

  const categoryImages = {
    activity: [best1, best2, best3, best4],
    footwear: [footwear1, footwear2, footwear3, footwear4],
    camping: [camping1, camping2, camping3, camping4],
    whitelabel: [white1, white2, white3, white4],
  };

  const currentImages =
    categoryImages[currentCategory] || categoryImages.activity;

  const bestProducts = [
    { id: 1, rank: 1, name: "COMPACT EX JKT", price: "135,150 원", image: currentImages[0] },
    { id: 2, rank: 2, name: "DAYCAMP JACKET", price: "199,000 원", image: currentImages[1] },
    { id: 3, rank: 3, name: "BIG SHOT", price: "169,000 원", image: currentImages[2] },
    { id: 4, rank: 4, name: "NOVELTY DAYCAMP JACKET", price: "229,000 원", image: currentImages[3] },
  ];

    const jackets =
    currentCategory === "activity"
        ? [
            { id: 1, name: "Black jacket", price: "186,200 원", image: jacket1 },
            { id: 2, name: "Brown jacket", price: "186,200 원", image: jacket2, badge: "NEW" },
            { id: 3, name: "Gray jacket", price: "186,200 원", image: jacket3 },
            { id: 4, name: "Bogum black jacket", price: "199,000 원", image: jacket4, badge: "SOLD OUT" },
            { id: 5, name: "Mint jacket", price: "186,200 원", image: jacket5 },
            { id: 6, name: "White jacket", price: "169,200 원", image: jacket6, badge: "BEST" },
            { id: 7, name: "Black jacket", price: "169,200 원", image: jacket7 },
            { id: 8, name: "Apricot jacket", price: "186,200 원", image: jacket8 },
        ]
        : [
            { id: 1, name: "Black jacket", price: "186,200 원", image: currentImages[0] },
            { id: 2, name: "Brown jacket", price: "186,200 원", image: currentImages[1], badge: "NEW" },
            { id: 3, name: "Gray jacket", price: "186,200 원", image: currentImages[2] },
            { id: 4, name: "Bogum black jacket", price: "199,000 원", image: currentImages[3], badge: "SOLD OUT" },
            { id: 5, name: "Mint jacket", price: "186,200 원", image: currentImages[0] },
            { id: 6, name: "White jacket", price: "169,200 원", image: currentImages[1], badge: "BEST" },
            { id: 7, name: "Black jacket", price: "169,200 원", image: currentImages[2] },
            { id: 8, name: "Apricot jacket", price: "186,200 원", image: currentImages[3] },
        ];

  const filteredJackets = jackets
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      const priceA = Number(a.price.replace(/[^0-9]/g, ""));
      const priceB = Number(b.price.replace(/[^0-9]/g, ""));

      if (sortType === "low-price") return priceA - priceB;
      if (sortType === "high-price") return priceB - priceA;
      if (sortType === "name") return a.name.localeCompare(b.name);

      return 0;
    });

  return (
    <section className="product-list-section">
      <div className="section-line" />

      <div className="product-inner">
        <h2>최신 베스트 셀렉션</h2>

        <p className="section-subtitle">
          이번 주 가장 사랑받은 베스트 아이템
        </p>

        <div className="product-grid best-grid">
          {bestProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isBest={true}
            />
          ))}
        </div>
      </div>

      <ProductBanner />

      <ProductDetail />

      <div className="product-inner">
        <div className="product-title-row">
          <div>
            <h2>드라이벤트 자켓</h2>
            <p className="section-subtitle">
              나를 위한 가장 좋은 선택
            </p>
          </div>

          <div className="product-controls">
            <div className="product-sort-area">
              <select
                value={sortType}
                onChange={(event) => setSortType(event.target.value)}
              >
                <option value="default">기본 정렬</option>
                <option value="low-price">가격 낮은순</option>
                <option value="high-price">가격 높은순</option>
                <option value="name">이름순</option>
              </select>
            </div>

            <div className="product-search-area">
              <input
                type="text"
                placeholder="상품명을 검색하세요"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />

              <FaFilter className="search-filter-icon" />
            </div>
          </div>
        </div>

        <div className="product-grid jacket-grid">
          {filteredJackets.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isBest={false}
            />
          ))}
        </div>

        {filteredJackets.length === 0 && (
          <p className="no-product-message">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductList;