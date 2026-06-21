const reviews = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing food and great ambience. Highly recommended!",
  },
  {
    name: "Priya Patel",
    review:
      "The Butter Chicken was absolutely delicious.",
  },
  {
    name: "Amit Verma",
    review:
      "Best restaurant experience I've had recently.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600">
                "{review.review}"
              </p>

              <h4 className="font-bold mt-4">
                - {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;