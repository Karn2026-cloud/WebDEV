import { FaHeart, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    name: "Premium Hoodie",
    price: "₹1999",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Denim Jacket",
    price: "₹2499",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d"
  },
  {
    name: "Casual T-Shirt",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
  },
  {
    name: "Sneakers",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Slim Fit Jeans",
    price: "₹1899",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    name: "Luxury Watch",
    price: "₹4999",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-gray-50">

      <div className="container-custom">

        <h2 className="section-title">
          Featured Products
        </h2>

        <div className="products-grid">

          {products.map((product,index)=>(
            <div
              key={index}
              className="product-card"
            >
              <div className="product-image">

                <img
                  src={`${product.image}?auto=format&fit=crop&w=1000&q=80`}
                  alt={product.name}
                />

                <button className="wishlist-btn">
                  <FaHeart />
                </button>

              </div>

              <div className="product-content">

                <h3>{product.name}</h3>

                <p>{product.price}</p>

                <button className="cart-btn">
                  <FaShoppingCart />
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;