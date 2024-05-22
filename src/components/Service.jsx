export default function Service({ service }) {
  const { _id, title, description, price, categories, rating } = service;

  /* 
  

  price": 19.99,
    "duration": "30 minutes",
    "image": "https://example.com/images/basic_car_wash.jpg",
    "categories": ["Wash", "Basic"],
    "rating": 4.5,
  
  */

  return (
    <>
      <div className="border border-sky-400 p-2 rounded-md">
        <h3 className="text-lg text-green-400 my-2">{title}</h3>
        <div className="space-y-2">
          <p className="p-1">{description}</p>
          <p>Price: {price}€</p>
          <p>
            Categories:{''}
            {categories.map((category, index) => (
              <span className="ml-1" key={category}>
                {index > 0 && ', '}
                {category}
              </span>
            ))}
          </p>

          <button className="border border-green-500 p-1 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
