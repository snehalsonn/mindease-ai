export default function Stats() {
  const stats = [
    { number: "24/7", label: "Always Available" },
    { number: "Gemini", label: "Powered AI" },
    { number: "100%", label: "Private" },
  ];

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {stats.map((item) => (

          <div
            key={item.label}
            className="glass rounded-3xl p-10 text-center"
          >

            <h2 className="text-6xl font-black text-pink-200">
              {item.number}
            </h2>

            <p className="mt-5 text-lg">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}