const dishes = [
  {
    name: "Paneer Tikka",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
  },
  {
    name: "Butter Chicken",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  },
  {
    name: "Veg Biryani",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-12">
          Popular Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  {dish.name}
                </h3>

                <p className="text-yellow-600 font-bold mt-2">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;