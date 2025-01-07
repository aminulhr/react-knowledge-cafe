import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handaletime = (id, time) => {
    setReadTime(readTime + time);
    const remining = bookmark.filter((bookmark) => bookmark.id !== id);
    setBookmark(remining);
  };
  const handaleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="flex">
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handaleBookmark={handaleBookmark}
            handaletime={handaletime}
          ></Blog>
        ))}
      </div>
      <div className="m-5 p-3 bg-gray-400 text-center">
        <p className="text-black text-2xl font-extrabold bg-slate-300 rounded-md p-3 ">
          Spent time on read : {readTime} min
        </p>
        <p className="text-3xl text-blue-800">
          Bookmarked Blogs : {bookmark.length}
          {bookmark.map((blog, indx) => (
            <div key={indx}>
              <h1 className="text-2xl bg-slate-300 m-4 p-4 rounded-md">
                {blog.title}
              </h1>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Blogs;
