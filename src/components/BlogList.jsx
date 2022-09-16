
const BlogList = ({title, blogs,handleDelete}) => {

    return(
        <div>
            <h2 className="text-sky-500 my-3">{title}</h2>

            <div className="w-full grid grid-cols-1 divide-y bg-slate-100 rounded-lg"> {/* repeating block */}
              {blogs.map((blog) =>(
                <div  key={blog.id} className="p-3">
                    <h3 className="text-lg text-rose-400 ">{blog.title}</h3>
                    <p className="text-sm text-gray-800" >{blog.body}</p>
                    <p className="text-xs text-gray-400 mt-1 underline decoration-dotted font-bold">{blog.author}</p>
                    <button className="boder-solid" onClick={()=> handleDelete(blog.id)} >Delete</button>
                </div>
              ))}
                 
            </div>
        </div>
    );
};

export default BlogList