import { useHeading } from "../../../hooks/useHeading";

export default function Job({ job, onSeeDetails }) {
    
  const { id, job_title } = job;
  return (
    <div className="flex flex-col justify-center items-center border border-sky-500 p-3 rounded-lg">
      <h2 className="text-xl my-3">{job_title}</h2>

      <button className="border border-sky-500 rounded-md px-2 py-1 inline-flex items-center text-white bg-[#7D8FFA]">
        Details
      </button>
    </div>
  );
}
