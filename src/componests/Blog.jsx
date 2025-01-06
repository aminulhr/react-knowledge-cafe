import "../Blog.css";
const Blog = ({ blog }) => {
  return (
    <div>
      <div className="m-5 p-3">
        <img className="cover" src={blog.cover} alt="" srcSet="" />
        <div className="display flex">
          <img className="author-img" src={blog.author_img} alt="" srcSet="" />
          <h1 className="text-center">{blog.author}</h1>
        </div>
        <p className="text-4xl">{blog.title}</p>
        <p>{blog.hashtags}</p>
        <button className="text-xl text-blue-600 h-1">Mark as Read</button>
      </div>
    </div>
  );
};

export default Blog;
