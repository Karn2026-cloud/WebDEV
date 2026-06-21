const trainers = [
  {
    name: "Alex Johnson",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sarah Smith",
    role: "Fitness Trainer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mike Wilson",
    role: "CrossFit Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  }
];

const Trainers = () => {
  return (
    <section className="section bg-white text-black">

      <div className="container-custom">

        <h2 className="section-title text-black">
          Expert Trainers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="card trainer-card bg-white"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
              />

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold">
                  {trainer.name}
                </h3>

                <p className="text-red-500 mt-2">
                  {trainer.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Trainers;