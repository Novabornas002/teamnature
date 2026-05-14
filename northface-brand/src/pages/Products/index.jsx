import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductHero from "./components/ProductHero";
import ProductList from "./components/ProductList";
import Footer from "../../components/common/Footer";

import productsPageStyle from "./Products.styles";

function Products() {
  const { category } = useParams();

  const currentCategory = category || "camping";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

    return (
    <main style={productsPageStyle}>
        <ProductHero currentCategory={currentCategory} />

        <ProductList currentCategory={currentCategory} />

        <Footer />
    </main>
    );
}

export default Products;