import { useState } from 'react';
import { useHeading } from '../../hooks/useHeading';
import Job from './Job';

export default function FeaturedJobs({ jobs }) {
  const heading = useHeading(`Featured Jobs`);
  const [dataLength, setDataLength] = useState(4);
  return (
    <>
      {heading}
      <div className="grid grid-cols-2 gap-3">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div
        className={`${
          dataLength === jobs.length
            ? 'hidden'
            : 'flex justify-center items-center'
        } my-6`}
      >
        <button
          className={`border border-sky-500 rounded-md px-2 py-1 text-white bg-[#7D8FFA]`}
          onClick={() => setDataLength(jobs.length)}
        >
          Load More
        </button>
      </div>
    </>
  );
}
