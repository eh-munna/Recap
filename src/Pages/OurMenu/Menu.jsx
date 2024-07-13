import useMenu from '../../hooks/useMenu';
import MenuItem from './MenuItem';

export default function Menu({ category }) {
  const [menu] = useMenu();
  const items = menu.filter((menuItem) => menuItem.category === category);
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {<MenuItem items={items} />}
      </div>
    </>
  );
}
