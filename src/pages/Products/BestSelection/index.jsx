import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaChevronLeft,
  FaFilter,
  FaRegHeart,
  FaHeart,
  FaSearchPlus,
} from "react-icons/fa";

import Footer from "../../../components/common/Footer";
import "./BestSelection.styles.css";

import logo from "../../../assets/images/common/north-logo1.png";

/* hiking */
import hiking1 from "../../../assets/images/best/hiking/hiking-best-1.jpg";
import hiking2 from "../../../assets/images/best/hiking/hiking-best-2.jpg";
import hiking3 from "../../../assets/images/best/hiking/hiking-best-3.jpg";
import hiking4 from "../../../assets/images/best/hiking/hiking-best-4.jpg";

/* running */
import running1 from "../../../assets/images/best/running/running-best-1.jpg";
import running2 from "../../../assets/images/best/running/running-best-2.jpg";
import running3 from "../../../assets/images/best/running/running-best-3.jpg";
import running4 from "../../../assets/images/best/running/running-best-4.jpg";

/* training */
import training1 from "../../../assets/images/best/training/training-best-1.jpg";
import training2 from "../../../assets/images/best/training/training-best-2.jpg";
import training3 from "../../../assets/images/best/training/training-best-3.jpg";
import training4 from "../../../assets/images/best/training/training-best-4.jpg";

/* camping */
import camping1 from "../../../assets/images/best/camping/camping-best-1.jpg";
import camping2 from "../../../assets/images/best/camping/camping-best-2.jpg";
import camping3 from "../../../assets/images/best/camping/camping-best-3.jpg";
import camping4 from "../../../assets/images/best/camping/camping-best-4.jpg";

/* climbing */
import climbing1 from "../../../assets/images/best/climbing/climbing-best-1.jpg";
import climbing2 from "../../../assets/images/best/climbing/climbing-best-2.jpg";
import climbing3 from "../../../assets/images/best/climbing/climbing-best-3.jpg";
import climbing4 from "../../../assets/images/best/climbing/climbing-best-4.jpg";

/* whitelabel */
import white1 from "../../../assets/images/best/whitelabel/whitelabel-best-1.jpg";
import white2 from "../../../assets/images/best/whitelabel/whitelabel-best-2.jpg";
import white3 from "../../../assets/images/best/whitelabel/whitelabel-best-3.jpg";
import white4 from "../../../assets/images/best/whitelabel/whitelabel-best-4.jpg";

const categoryTabs = [
  { key: "hiking", label: "하이킹" },
  { key: "running", label: "러닝" },
  { key: "training", label: "트래킹러닝" },
  { key: "camping", label: "캠핑" },
  { key: "climbing", label: "클라이밍" },
  { key: "whitelabel", label: "화이트라벨" },
];

const productImages = {
  hiking: [hiking1, hiking2, hiking3, hiking4],
  running: [running1, running2, running3, running4],
  training: [training1, training2, training3, training4],
  camping: [camping1, camping2, camping3, camping4],
  climbing: [climbing1, climbing2, climbing3, climbing4],
  whitelabel: [white1, white2, white3, white4],
};

const productNames = {
  hiking: [
    ["COMPACT EX JKT", "135,150 원"],
    ["DAYCAMP JACKET", "199,000 원"],
    ["BIG SHOT", "169,000 원"],
    ["NOVELTY DAYCAMP JACKET", "229,000 원"],
  ],
  running: [
    ["RUNNING SHOES", "159,000 원"],
    ["LIGHT JACKET", "189,000 원"],
    ["RUNNING PACK", "99,000 원"],
    ["CITY CAP", "45,000 원"],
  ],
  training: [
    ["TRAIL JACKET", "199,000 원"],
    ["TRAIL SHOES", "169,000 원"],
    ["TRAIL BAG", "129,000 원"],
    ["SUMMER TEE", "69,000 원"],
  ],
  camping: [
    ["STORMBREAK 1", "270,000 원"],
    ["TNF CAMP CHAIR SLIM", "219,000 원"],
    ["TNF CAMPTABLE S", "99,000 원"],
    ["LAND ARMS MUG 350", "49,000 원"],
  ],
  climbing: [
    ["CLIMBING JACKET", "199,000 원"],
    ["CLIMBING PANTS", "159,000 원"],
    ["CLIMBING BAG", "129,000 원"],
    ["CLIMBING TEE", "69,000 원"],
  ],
  whitelabel: [
    ["WHITE LABEL JACKET", "169,000 원"],
    ["CITY WIND JACKET", "159,000 원"],
    ["MINIMAL HOODIE", "129,000 원"],
    ["LIGHT PANTS", "109,000 원"],
  ],
};

function BestSelection() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("camping");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [likedItems, setLikedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentImages = productImages[activeCategory];
  const currentNames = productNames[activeCategory];

  const allProducts = Array.from({ length: 32 }, (_, index) => {
    const itemIndex = index % 4;

    return {
      id: index + 1,
      rank: index + 1,
      image: currentImages[itemIndex],
      name: currentNames[itemIndex][0],
      price: currentNames[itemIndex][1],
    };
  });

const products = allProducts.slice(
  (currentPage - 1) * 16,
  currentPage * 16
);

  const handleCartClick = (event) => {
    event.stopPropagation();

    const savedCount = Number(localStorage.getItem("cartCount")) || 0;
    localStorage.setItem("cartCount", savedCount + 1);

    alert("장바구니에 상품이 담겼습니다.");
  };

  const handleLikeClick = (event, productId) => {
    event.stopPropagation();

    setLikedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleDetailClick = (event, productId) => {
    event.stopPropagation();
    navigate(`/product/${productId}`);
  };

  return (
    <main className="best-page">
      <header className="best-header">
        <Link to="/">
          <img src={logo} alt="THE NORTH FACE" className="best-logo" />
        </Link>

        <div className="best-header-icons">
          <div className="best-search-box">
            <input type="text" />
            <FaSearch />
          </div>

          <FaShoppingCart className="best-cart-icon" />
        </div>
      </header>

      <section className="best-title-section">
        <Link to="/products" className="best-back-btn">
          <FaChevronLeft />
        </Link>

        <h1>최신 베스트 셀렉션</h1>
        <p>이번 주 가장 사랑받은 베스트 TOP 20</p>
      </section>

      <nav className="best-category-nav">
        {categoryTabs.map((category) => (
          <button
            key={category.key}
            className={activeCategory === category.key ? "active" : ""}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <section className={`best-content ${isFilterOpen ? "filter-open" : ""}`}>
        <aside className="best-filter-area">
          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            필터 {isFilterOpen ? "숨기기" : "표시"} <FaFilter />
          </button>

          {isFilterOpen && (
            <div className="filter-panel">
              <h3>필터</h3>

              <div className="filter-group">
                <h4>성별</h4>
                <label><span>남성</span><input type="checkbox" /></label>
                <label><span>여성</span><input type="checkbox" /></label>
                <label><span>남녀공용</span><input type="checkbox" /></label>
              </div>

              <div className="filter-group">
                <h4>의류 사이즈</h4>
                <label><span>080(XS)</span><input type="checkbox" /></label>
                <label><span>085(S)</span><input type="checkbox" /></label>
                <label><span>090(M)</span><input type="checkbox" /></label>
                <label><span>095(L)</span><input type="checkbox" /></label>
                <label><span>100(XL)</span><input type="checkbox" /></label>
                <label><span>105(XXL)</span><input type="checkbox" /></label>
              </div>

              <div className="filter-group">
                <h4>가격대</h4>
                <label><span>0 - 50,000 원</span><input type="checkbox" /></label>
                <label><span>50,000 - 100,000 원</span><input type="checkbox" /></label>
                <label><span>100,000 - 150,000 원</span><input type="checkbox" /></label>
                <label><span>150,000 - 200,000 원</span><input type="checkbox" /></label>
                <label><span>200,000 원 +</span><input type="checkbox" /></label>
              </div>
            </div>
          )}
        </aside>

        <div className="best-product-area">
          <div className="best-grid">
            {products.map((product) => {
              const isLiked = likedItems.includes(product.id);

              return (
                <article className="best-card" key={product.rank}>
                  <div className="best-image-box">
                    <span className={product.rank === 1 ? "rank first" : "rank"}>
                      {product.rank}
                    </span>

                    <img src={product.image} alt={product.name} />

                    <div className="best-hover-icons">
                      <button
                        type="button"
                        onClick={handleCartClick}
                        aria-label="장바구니"
                      >
                        <FaShoppingCart />
                      </button>

                      <button
                        type="button"
                        onClick={(event) =>
                          handleDetailClick(event, product.id)
                        }
                        aria-label="자세히 보기"
                      >
                        <FaSearchPlus />
                      </button>

                      <button
                        type="button"
                        className={isLiked ? "liked" : ""}
                        onClick={(event) =>
                          handleLikeClick(event, product.id)
                        }
                        aria-label="좋아요"
                      >
                        {isLiked ? <FaHeart /> : <FaRegHeart />}
                      </button>
                    </div>
                  </div>

                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              );
            })}
          </div>

          <div className="best-pagination">
            <button
              className={currentPage === 1 ? "active" : ""}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>

            <button
              className={currentPage === 2 ? "active" : ""}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default BestSelection;