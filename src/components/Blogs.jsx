import { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmarks from './Bookmarks';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('blogs.json');
      const data = await response.json();
      setBlogs(data);
    })();
  }, []);

  const handleRead = (blog, id) => {
    const existBlog = bookmarks.find((blog) => blog.id === id);
    if (existBlog) {
      alert(`already bookmarked`);
      return;
    } else {
      //   const newBookmark = bookmarks.map((bookmark) =>
      //     bookmark.id === id
      //       ? { ...bookmark, reading_time: bookmark.reading_time + 1 }
      //       : bookmark
      //   );
      setBookmarks([...bookmarks, blog]);
    }
  };

  return (
    <div className="grid grid-cols-10 gap-6">
      <div className="col-span-8">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} onRead={handleRead} />
        ))}
      </div>
      <div className="col-span-2">
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}
