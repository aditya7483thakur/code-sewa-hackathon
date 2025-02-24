const sponsors = [
  {
    name: "Pathway",
    image: "/pathway-logo-white.png",
    url: "https://pathway.com",
  },
];

const Sponsors = () => {
  return (
    <div className="text-center py-10 " id="sponsors">
      <h1 className="text-5xl font-bold mb-14">Sponsors</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-xl"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-60 h-40 object-contain transition-transform transform hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
