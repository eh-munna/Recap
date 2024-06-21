import useServices from '../hooks/useServices';
import Service from './Service';

export default function Services() {
  const services = useServices();

  return (
    <>
      <div>
        <h2 className="text-xl text-center text-green-500 my-6">Services</h2>
      </div>

      <div className="grid grid-cols-3 gap-6 my-6">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </>
  );
}
