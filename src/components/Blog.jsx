/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
export default function Blog({ blog, onBookmarked, onRead }) {
  const {
    id,
    blog_title,
    author_name,
    author_image,
    blog_cover,
    reading_time,
    posted_date,
    tags,
    isBooked,
  } = blog;

  let oldDate = new Date(posted_date);
  const newDate = new Date();
  const diff = newDate.getTime() - oldDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <div className="mb-6">
      <img className="" src={blog_cover} alt="" />
      {/* author and time */}
      <div className="mt-6 flex justify-between">
        {/* author*/}
        <ul className="flex justify-center items-center gap-6">
          <li>
            <img className="w-16 h-16 rounded-full" src={author_image} alt="" />
          </li>
          <li>
            <ul>
              <li>{author_name}</li>
              <li>
                {posted_date} ({days} {days > 1 ? `days` : `day`} ago)
              </li>
            </ul>
          </li>
        </ul>
        {/* time */}
        <ul className="flex justify-center items-center gap-3">
          <li>{reading_time} mins to read</li>
          <li
            onClick={() => onBookmarked(blog, id, reading_time)}
            className="cursor-pointer"
          >
            {!isBooked ? <FaRegBookmark /> : <FaBookmark />}
          </li>
        </ul>
      </div>
      {/* title */}
      <div className="my-6">
        <h1 className="text-3xl my-3">{blog_title}</h1>
        {/* tags */}
        <ul className="flex gap-2">
          {tags.map((tag) => (
            <li
              className="border border-indigo-200 px-2 py-1 rounded-md bg-sky-600 text-white"
              key={tag}
            >
              <span>#</span>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
      <button
        onClick={() => onRead(reading_time, id)}
        className="my-3 px-2 py-1 rounded-md border border-indigo-300"
      >
        Mark as read
      </button>
    </div>
  );
}
