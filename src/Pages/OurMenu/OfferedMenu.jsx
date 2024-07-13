import Menu from './Menu';

export default function OfferedMenu() {
  return (
    <>
      <h3 className="text-center text-3xl">Our Offered Items</h3>
      <Menu category={'offered'} />
      <div className="flex mx-auto justify-center items-center">
        <button className="border border-sky-600 p-2 rounded-lg my-6">
          View Full Menu
        </button>
      </div>
    </>
  );
}
