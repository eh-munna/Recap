import DessertMenu from './DessertMenu';
import OfferedMenu from './OfferedMenu';
import PopularMenu from './PopularMenu';
import SaladMenu from './SaladMenu';

export default function OurMenu() {
  return (
    <>
      <PopularMenu />
      <DessertMenu />
      <OfferedMenu />
      <SaladMenu />
    </>
  );
}
