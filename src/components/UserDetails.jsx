import { useLoaderData } from 'react-router-dom';

export default function UserDetails() {
  const user = useLoaderData();
  const { name, email } = user;
  return (
    <>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
      </ul>
    </>
  );
}
