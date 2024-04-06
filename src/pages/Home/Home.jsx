import { useEffect, useState } from 'react';
import { useHeading } from '../../hooks/useHeading';
import FeaturedJobs from '../Jobs/FeaturedJobs';

export default function Home() {
  const heading = useHeading(`Welcome To The Career Hub!`);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/jobs.json');
      const data = await res.json();
      setJobs(data.jobs);
    })();
  }, []);
  return (
    <>
      {heading}

      {<FeaturedJobs jobs={jobs} />}
    </>
  );
}
