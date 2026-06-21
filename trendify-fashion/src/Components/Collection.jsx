const collections = [
  {
    title: "Summer Collection",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b"
  },
  {
    title: "Winter Collection",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
  },
  {
    title: "Streetwear Collection",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
  }
];

const Collection = () => {
  return (
    <section className="section">

      <div className="container-custom">

        <h2 className="section-title">
          Latest Collections
        </h2>

        <div className="collection-grid">

          {collections.map((item,index)=>(
            <div
              key={index}
              className="collection-card"
            >
              <img
                src={`${item.image}?auto=format&fit=crop&w=1200&q=80`}
                alt={item.title}
              />

              <div className="collection-overlay">

                <h3>{item.title}</h3>

                <button>
                  Explore
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Collection;