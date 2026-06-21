const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center justify-center">
        <div>
          <h1 className="text-6xl font-bold">
            Delicious Food
          </h1>

          <p className="mt-5 text-xl">
            Taste the best dishes in town
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;