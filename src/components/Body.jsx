import React from "react";

const Card = ({ title, description }) => (
  <div className="flex bg-[#2e2e2e] rounded-lg overflow-hidden h-[152px]">
    <div className="w-[320px] bg-gray-400"></div>
    <div className="p-4 text-white flex flex-col justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-[#9b9b9b]">{description}</p>
    </div>
  </div>
);

const Body = () => {
  const cards = [
    { title: "Titulo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Ver más..." },
    { title: "Titulo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Ver más..." },
    { title: "Titulo 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Ver más..." }
  ];

  return (
    <div className="max-w-[1240px] h-90vh mx-auto px-4 py-8 space-y-6">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Body;
