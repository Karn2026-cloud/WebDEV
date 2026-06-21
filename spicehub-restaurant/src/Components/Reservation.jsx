const Reservation = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Reserve a Table
        </h2>

        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded bg-gray-800"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 rounded bg-gray-800"
          />

          <input
            type="date"
            className="p-4 rounded bg-gray-800"
          />

          <input
            type="time"
            className="p-4 rounded bg-gray-800"
          />

          <input
            type="number"
            placeholder="Guests"
            className="p-4 rounded bg-gray-800 md:col-span-2"
          />

          <button
            className="bg-yellow-500 text-black py-4 rounded font-bold md:col-span-2 hover:bg-yellow-400"
          >
            Book Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;