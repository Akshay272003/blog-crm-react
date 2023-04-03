import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
    const {id} = useParams();
    const {data:blog, isPending, error} =  useFetch("http://localhost:8000/blogs/"+id);

    const navigate = useNavigate();
    const [delElement, setDelete] = useState('Delete Blog');

    const handleClick = ()=>{
        if(delElement === 'Delete Blog'){
            setDelete("Click again to delete...");
        }
        else{

            fetch("http://localhost:8000/blogs/"+id, {
                method:'DELETE'
            }).then(()=>{
                console.log("blog deleted");
                navigate('/');
            })
        }
    }
    
    return ( 
        <div className="w-3/4 mx-auto m-5 p-3 flex flex-col bg-teal-100 rounded-xl">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            {blog && 
                <article>
                <div className="text-teal-700 text-4xl capitalize ml-4 mt-4"><b>{blog.title}</b></div>
                <div className="mx-auto my-2 text-gray-500 w-11/12 font-semibold border-b border-b-white p-2">~{blog.author}</div>
                <div className="my-5 pb-2 text-gray-700 w-11/12 mx-auto px-2 text-xl border-b border-b-white">{blog.body}</div>
                </article>
            }
            {blog && <button className="w-fit text-red-700 mt-2 mb-2 ml-4 rounded-xl" onClick={handleClick}>{delElement}</button>}

            
        </div>
     );
}
 
export default BlogDetail;