import { useNavigate } from 'react-router-dom';

export default function Job({ job }) {
  const { id, job_title } = job;

  const navigate = useNavigate();
  const handleSeeDetails = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center border border-sky-500 p-3 rounded-lg">
      <h2 className="text-xl my-3">{job_title}</h2>

      <button
        onClick={() => handleSeeDetails(id)}
        className="border border-sky-500 rounded-md px-2 py-1 inline-flex items-center text-white bg-[#7D8FFA]"
      >
        Details
      </button>
    </div>
  );
}
