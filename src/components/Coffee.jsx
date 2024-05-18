import { Link, useNavigate } from 'react-router-dom';

export default function Coffee({ coffee, handleDelete }) {
  const navigate = useNavigate();
  const { _id, name, chef, price, url } = coffee;

  const handleCoffee = (_id) => {
    navigate(`/view-coffee/${_id}`);
  };

  return (
    <>
      <div className="border border-green-400 rounded-md p-2 flex justify-between items-center">
        <figure>
          <img src={url} alt="" />
        </figure>
        <div className="space-y-3 flex flex-col p-1">
          <h1>
            <b>Name:</b> {name}
          </h1>
          <p>
            <b>Chef:</b> {chef}
          </p>
          <p>
            <b>Price:</b> {price}
          </p>
        </div>
        <div className="space-y-3 flex flex-col p-1">
          <li className="list-none">
            <button onClick={() => handleCoffee(_id)}>View</button>
          </li>
          <li className="list-none">
            <Link to={`/update-coffee/${_id}`}>
              <button>Edit</button>
            </Link>
          </li>
          <li className="list-none">
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </li>
        </div>
      </div>
    </>
  );
}
