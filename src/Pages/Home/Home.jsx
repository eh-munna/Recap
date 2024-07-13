import usePageTitle from '../../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Home');
  return (
    <>
      <h3>Hello From Home</h3>
    </>
  );
}
