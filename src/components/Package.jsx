import PropTypes from 'prop-types';

export default function Package({ offer }) {
  const { planName, features } = offer;
  return (
    <>
      {/* <div className="border border-indigo-500 bg-sky-600 text-white p-3 flex flex-col justify-between"> */}
      <div className="border border-indigo-500 bg-sky-600 text-white p-3 flex flex-col">
        <h2 className="text-3xl my-6">{planName}</h2>
        {/* <div className=""> */}
        {/* <h2 className="text-3xl my-6">{planName}</h2> */}
        <div className="flex-grow">
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="border border-green-500 rounded-md px-2 py-1">
          Book Now
        </button>
      </div>
    </>
  );
}

Package.propTypes = { offer: PropTypes.object.isRequired };
