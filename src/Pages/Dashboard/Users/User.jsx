import { Bounce, toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useUsers from '../../../hooks/useUsers';

export default function User({ item, idx, lastRow }) {
  const [, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (_id) => {
    const confirmation = confirm('Are you sure you want to delete?');
    if (!confirmation) {
      return;
    }
    (async () => {
      const res = await axiosSecure.delete(`/users/${_id}`);
      refetch();
    })();
  };

  const handleAdmin = (_id) => {
    const confirmation = confirm(
      'Are you sure you want to make the user admin?'
    );
    if (!confirmation) {
      return;
    }
    (async () => {
      const res = await axiosSecure.patch(`/users/admin/${_id}`, {
        role: 'admin',
      });
      if (res.data.modifiedCount > 0) {
        toast.success('User role is changed to admin', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        refetch();
      }
    })();
  };
  return (
    <>
      <div
        className={`grid grid-cols-4 gap-3 py-2 border border-t-0 border-r-0 border-l-0 ${
          idx === lastRow ? 'border-b-0' : 'border-b-sky-400'
        }`}
      >
        <div>{idx + 1}</div>
        <div>{item.email}</div>
        <div>{item.role}</div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleAdmin(item._id)}
            className="border border-green-400 p-1 rounded-md"
          >
            Change Role
          </button>
          <button
            onClick={() => handleDelete(item._id)}
            className="border border-green-400 p-1 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
