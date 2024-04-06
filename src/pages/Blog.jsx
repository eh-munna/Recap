import { useHeading } from '../hooks/useHeading';

export default function Blog() {
  const heading = useHeading(`All The Blogs Are Here`);
  return <>{heading}</>;
}
