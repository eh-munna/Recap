import { useLoaderData } from 'react-router-dom';
import User from './User';

export default function Users() {
  const users = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-3">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
