
import BlogList from "./components/BlogList";
import useFetch from "./hooks/useFetch";

const Home = () =>{

    const {data:blogs,isLoading,error} = useFetch("http://localhost:8000/blogs");

    // const handleDelete =(id) =>{
    //     const newList = blogs.filter((blog)=>blog.id!==id);
    //     setBlogs(newList);
    // }

    

    return (
        <div>
            <h1 className="text-xl font-bold text-slate-400 w-full">
                &nbsp;
            </h1>
            { isLoading && <div>Loading...</div>}
            { error && <div className="text-sm text-red">{error}</div>}
            { blogs && <BlogList title="Home Blogs" blogs={blogs} /> }
            {/* { blogs && <BlogList title="Home Blogs" blogs={blogs} handleDelete={handleDelete} /> } */}
        </div>
    );
}


export default Home;