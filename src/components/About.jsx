export default function About() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 items-stretch">
        <div className="col-span-1">
          <div className="border border-green-500 p-1 rounded-md h-full"></div>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl">Headline</h2>
          <p className="text-sky-500 p-1">
            Body Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, blanditiis. Iusto ipsum optio reprehenderit, consectetur
            laborum porro perspiciatis sit in libero rerum. Ducimus officia
            minima corrupti neque culpa aliquam ipsa.
          </p>
        </div>
      </div>
    </>
  );
}
