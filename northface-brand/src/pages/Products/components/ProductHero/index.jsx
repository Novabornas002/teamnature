import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./ProductHero.styles.css";

import logo from "../../../../assets/images/north-logo1.png";

import activityImage from "../../../../assets/images/activity.jpg";
import footwearImage from "../../../../assets/images/footwear.jpg";
import campingImage from "../../../../assets/images/camping2.jpg";
import whiteLabelImage from "../../../../assets/images/whitelabel.jpg";

import activityBg from "../../../../assets/images/activity-bg.jpg";
import footwearBg from "../../../../assets/images/footwear-bg.jpg";
import campingBg from "../../../../assets/images/camping.jpg";
import whiteLabelBg from "../../../../assets/images/whitelabel-bg.jpg";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

function ProductHero({ currentCategory }) {
  const [searchText, setSearchText] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const savedCount =
  Number(localStorage.getItem("cartCount")) || 0;

    const categoryData = {
    activity: {
        title: "한계를 넘어서는 움직임",
        image: activityImage,
        background: activityBg,
    },
    footwear: {
        title: "가장 완벽한 한 걸음",
        image: footwearImage,
        background: footwearBg,
    },
    camping: {
        title: "자연 속에서, 가장 완벽한 하루",
        image: campingImage,
        background: campingBg,
    },
    whitelabel: {
        title: "도시와 자연의 경계를 넘다",
        image: whiteLabelImage,
        background: whiteLabelBg,
    },
    };

    const currentData =
      categoryData[currentCategory] || categoryData.camping;

  return (
    <>
      <header className="hero-header">
        <Link to="/" className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <nav className="product-nav">
          <NavLink to="/products/activity">Activity</NavLink>

          <NavLink to="/products/footwear">Footwear</NavLink>

          <NavLink to="/products/camping">Camping</NavLink>

          <NavLink to="/products/whitelabel">White Label</NavLink>
        </nav>

        <div className="header-icons">
          <div className="search-box">
            <input
              type="text"
              placeholder="상품 검색"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />

            <FaSearch />
          </div>

          <button
            className="cart-button"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />

            {savedCount > 0 && (
              <span className="hero-cart-count">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <section
        className="hero-banner"
        style={{
            backgroundImage: `url(${currentData.background})`,
        }}
        >
        <div className="hero-content">

            <motion.div
              key={`text-${currentCategory}`}
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                  duration: 0.8,
                  ease: "easeOut",
              }}
            >
            <h1>{currentData.title}</h1>

            <p>
              도시를 벗어난 순간,
              <br />
              진짜 편안함이 시작됩니다.
            </p>

            <p>
              노스페이스는 단순히 장비를 만드는 것이 아니라
              <br />
              자연 속에서 머무는 시간을 설계합니다.
            </p>

            <p>
              바람을 막아주는 텐트,
              <br />
              체온을 지켜주는 자켓,
              <br />
              그리고 그 안에서 완성되는 여유로운 순간까지.
            </p>
          </motion.div>

          <motion.div
          key={currentCategory}
          className="hero-camping-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
              duration: 0.8,
              ease: "easeOut",
          }}
          >
            <img src={currentData.image} alt={currentCategory} />
          </motion.div>

        </div>
      </section>

      {isCartOpen && (
        <div
          className="product-cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`product-side-cart ${isCartOpen ? "open" : ""}`}>
        <div className="product-side-cart-header">
          <h3>장바구니</h3>

          <button onClick={() => setIsCartOpen(false)}>
            ×
          </button>
        </div>

        {savedCount > 0 ? (
          <>
            <p className="product-empty-cart">
              COMPACT EX JKT
              <br />
              수량 : {savedCount}
            </p>

            <p className="product-empty-cart">
              총 금액 :
              {" "}
              {(135150 * savedCount).toLocaleString()}원
            </p>
          </>
        ) : (
          <p className="product-empty-cart">
            아직 담긴 상품이 없습니다.
          </p>
        )}

        <button
          className="product-cart-clear-btn"
          onClick={() => {
            localStorage.setItem("cartCount", 0);
            window.location.reload();
          }}
        >
          장바구니 비우기
        </button>

        <button
          className="product-cart-close-btn"
          onClick={() => setIsCartOpen(false)}
        >
          계속 쇼핑하기
        </button>
      </div>
    </>
  );
}

export default ProductHero;