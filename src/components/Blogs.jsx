import { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmarks from './Bookmarks';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);
  //   const [readId, setReadId] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('blogs.json');
      const data = await response.json();
      setBlogs(data);
    })();
  }, []);

  const handleBookmarked = (blog, id) => {
    const existBlog = bookmarks.find((blog) => blog.id === id);
    if (existBlog) {
      alert(`already bookmarked`);
      return;
    } else {
      const newBlog = blogs.map((blog) => {
        if (blog.id === id) {
          return {
            ...blog,
            isBooked: true,
          };
        } else {
          return blog;
        }
      });

      setBlogs(newBlog);
      setBookmarks([...bookmarks, blog]);
    }
  };

  const handleRead = (reading_time, id) => {
    // const newId = [];
    // const existId = readId.find((r) => r === id);

    const readBlog = bookmarks.filter((blog) => blog.id !== id);
    const newBlog = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          isBooked: false,
        };
      } else {
        return blog;
      }
    });
    setTime(time + reading_time);
    setBlogs(newBlog);
    setBookmarks(readBlog);
    // if (existId) {
    //   alert(`already read`);
    //   return;
    // } else {
    //   setTime(time + reading_time);
    //   newId.push(id);
    //   setReadId(newId);
    // }
  };

  return (
    <div className="grid grid-cols-10 gap-6">
      <div className="col-span-8">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            onBookmarked={handleBookmarked}
            onRead={handleRead}
          />
        ))}
      </div>
      <div className="col-span-2">
        <Bookmarks bookmarks={bookmarks} time={time} />
      </div>
    </div>
  );
}
