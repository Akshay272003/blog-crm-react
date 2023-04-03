// import { useState, useEffect } from "react";
import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () => {

    const { data:blogs , isPending, error } = useFetch("http://localhost:8000/blogs");
    
    return ( 
        <div className="container w-3/4 mx-auto flex flex-col m-4 bg-teal-200 pb-5 rounded-xl">
            {error && <div className='text-red container w-3/4 mx-auto flex justify-center my-5'>{error}</div>}
            {isPending && <div className='text-gray w-3/4 mx-auto flex justify-center my-5'>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All" />}

        </div>
     );
}
 
export default Home;