export default function User({ user }) {
  const { name, email } = user;
  return (
    <>
      <li>
        {name}

        <ul className="list-inside">
          <li className="pl-5">email: {email}</li>
        </ul>
      </li>
    </>
  );
}
