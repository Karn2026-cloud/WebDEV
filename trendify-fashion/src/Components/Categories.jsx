const categories = [
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
  },
  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
  }
];

const Categories = () => {
  return (
    <section className="section">

      <div className="container-custom">

        <h2 className="section-title">
          Shop By Category
        </h2>

        <div className="categories-grid">

          {categories.map((item,index)=>(
            <div
              key={index}
              className="category-card"
            >
              <img
                src={`${item.image}?auto=format&fit=crop&w=1000&q=80`}
                alt={item.title}
              />

              <div className="category-overlay">

                <h3>{item.title}</h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;