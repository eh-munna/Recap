import { useLoaderData, useParams } from 'react-router-dom';
import { useHeading } from '../../hooks/useHeading';

export default function JobDetails() {
  //   const [jobs, setJobs] = useState([]);
  const heading = useHeading(`Job Details`);
  const { jobs: loadedJobs } = useLoaderData();
  const { jobId } = useParams();

  const job = loadedJobs.find((job) => job.id === jobId);
  const { job_title, job_description, job_responsibility } = job;
  return (
    <>
      {heading}

      <div className="flex flex-col justify-center items-center border border-sky-500 p-3 rounded-lg">
        <h2 className="text-xl my-3">{job_title}</h2>

        <p>{job_description}</p>
        <p>{job_responsibility}</p>
      </div>
    </>
  );
}
