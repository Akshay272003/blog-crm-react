import {Link} from 'react-router-dom';
const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;


    return (
        <>
            <div className="w-4/5 text-3xl font-semibold flex justify-center mx-auto text-teal-700 m-3 border-b-white border-b pb-1"><span className="">{title}</span></div>
            
            {blogs.map((blog)=>{
                return (
                    <div className="container w-3/4 mx-auto rounded-xl bg-white hover:shadow-lg m-3 p-3" key={blog.id}>
                        <Link to={`blogs/${blog.id}`}>
                            <div className="text-teal-700 text-lg font-semibold">{blog.title}</div>
                            <div className="text-xs mt-1 ml-2 text-gray-700">Written by : {blog.author}</div>
                        </Link>
                        
                    </div>
                )
            })}
        </>
    );
}
 
export default BlogList;