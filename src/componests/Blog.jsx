import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Blog.css";

const Blog = ({ blog, handaleBookmark, handaletime }) => {
  const { id, hashtags, reading_time } = blog;
  return (
    <div>
      <div className="m-5 p-3">
        <img className="cover" src={blog.cover} alt="" srcSet="" />
        <div className=" flex justify-between ">
          <div className=" flex ">
            <img
              className="author-img"
              src={blog.author_img}
              alt=""
              srcSet=""
            />
            <div className="flex flex-col text-black justify-center">
              <h1 className="text-center">{blog.author}</h1>
              <h2>{blog.posted_date}</h2>
            </div>
          </div>
          <div className="flex items-center ">
            <p>{blog.reading_time} min read</p>
            <button onClick={() => handaleBookmark(blog)}>
              <FontAwesomeIcon
                className="text-black p-2 text-xl"
                icon={faBookmark}
              />
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-green-400">{blog.title}</h1>
        <p>
          {hashtags.map((hash, index) => (
            <span key={index} className="text-blue-500 p-1">
              <a href="">{hash}</a>
            </span>
          ))}
        </p>
        <button
          className="font-bold text-purple-800 underline"
          onClick={() => handaletime(id, reading_time)}
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default Blog;
