import useUsers from '../../../hooks/useUsers';
import User from './User';

export default function Users() {
  const [users] = useUsers();

  const lastRow = users.length - 1;

  return (
    <>
      <div>
        <h2 className="text-2xl">Total Users: {users.length}</h2>
      </div>

      <div className="border border-indigo-400 p-2 rounded-md">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div>Nr. Item</div>
          <div>User Email Name</div>
          <div>Role</div>
          <div className="flex justify-center">Action</div>
        </div>

        {users.map((item, idx) => (
          <User key={item._id} item={item} idx={idx} lastRow={lastRow} />
        ))}
      </div>
    </>
  );
}
