const Gallery = () => {
  const items = [
    {
      image: "https://picsum.photos/200/300?random=1",
      title: "Sunset Dreams",
      price: "$12.99",
    },
    {
      image: "https://picsum.photos/200/300?random=2",
      title: "Forest Walk",
      price: "$15.49",
    },
    {
      image: "https://picsum.photos/200/300?random=3",
      title: "Ocean Breeze",
      price: "$22.00",
    },
    {
      image: "https://picsum.photos/200/300?random=4",
      title: "Mountain Heights",
      price: "$30.00",
    },
    {
      image: "https://picsum.photos/200/300?random=5",
      title: "Urban Vibes",
      price: "$10.75",
    },
    {
      image: "https://picsum.photos/200/300?random=6",
      title: "Desert Mirage",
      price: "$18.20",
    },
    {
      image: "https://picsum.photos/200/300?random=7",
      title: "Night Sky",
      price: "$25.30",
    },
    {
      image: "https://picsum.photos/200/300?random=8",
      title: "Lakeside Reflections",
      price: "$27.45",
    },
    {
      image: "https://picsum.photos/200/300?random=9",
      title: "Wild Flowers",
      price: "$13.90",
    },
    {
      image: "https://picsum.photos/200/300?random=10",
      title: "Cozy Cottage",
      price: "$16.60",
    },
    {
      image: "https://picsum.photos/200/300?random=11",
      title: "City Lights",
      price: "$20.40",
    },
    {
      image: "https://picsum.photos/200/300?random=12",
      title: "Autumn Leaves",
      price: "$24.95",
    },
    {
      image: "https://picsum.photos/200/300?random=13",
      title: "Rolling Hills",
      price: "$29.99",
    },
    {
      image: "https://picsum.photos/200/300?random=14",
      title: "Winter Wonderland",
      price: "$35.00",
    },
    {
      image: "https://picsum.photos/200/300?random=15",
      title: "Mystic River",
      price: "$17.50",
    },
    {
      image: "https://picsum.photos/200/300?random=16",
      title: "Tropical Escape",
      price: "$21.75",
    },
    {
      image: "https://picsum.photos/200/300?random=17",
      title: "Summer Vibes",
      price: "$14.20",
    },
    {
      image: "https://picsum.photos/200/300?random=18",
      title: "Spring Bloom",
      price: "$19.60",
    },
    {
      image: "https://picsum.photos/200/300?random=19",
      title: "Rustic Road",
      price: "$23.10",
    },
    {
      image: "https://picsum.photos/200/300?random=20",
      title: "Hidden Valley",
      price: "$28.90",
    },
  ];

  return (
    <>
      <div className="cardContiner">
        {items.map((ele, i) => {
          return (
            <div key={i} className="card">
              <img src={ele.image} alt="" />
              <p>
                <b>{ele.title}</b>
              </p>
              <p>{ele.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallery;
