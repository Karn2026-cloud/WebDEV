const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  "https://images.unsplash.com/photo-1549060279-7e168fcee0c2",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e"
];

const Gallery = () => {
  return (
    <section className="section bg-black">

      <div className="container-custom">

        <h2 className="section-title">
          Transformation Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-image"
            >
              <img
                src={`${img}?auto=format&fit=crop&w=1000&q=80`}
                alt="Gym"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;