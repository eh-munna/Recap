import Menu from './Menu';

export default function PopularMenu() {
  return (
    <>
      <h3 className="text-center text-3xl">Our Popular Items</h3>
      <Menu category="popular" />
      <div className="flex mx-auto justify-center items-center">
        <button className="border border-sky-600 p-2 rounded-lg my-6">
          View Full Menu
        </button>
      </div>
    </>
  );
}
