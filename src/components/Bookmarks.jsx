/* eslint-disable react/prop-types */
export default function Bookmarks({ bookmarks, time }) {
  return (
    <div>
      <h4 className="text-lg">Spent time on read : {time} min</h4>
      {bookmarks.length > 0 && (
        <>
          <h3 className="text-2xl">Bookmarked Blogs : {bookmarks.length}</h3>
        </>
      )}

      <ul className="space-y-3 py-6">
        {bookmarks.map((bookmark) => (
          <li
            className="border border-indigo-300 bg-sky-500 text-white p-2 rounded-md"
            key={bookmark.id}
          >
            {bookmark.blog_title}
          </li>
        ))}
      </ul>
    </div>
  );
}
