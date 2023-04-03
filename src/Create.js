import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // it prevent from page refreshing on submit 
        e.preventDefault();

        const blog = { author, body, title };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then((res) => {
            console.log("Blog Created");
            setIsPending(false);
            navigate("/");
        })
    }

    return (
        <div className="w-full md:w-3/4 mx-auto mt-4 p-3 bg-teal-50">
            <form onSubmit={handleSubmit}>

                <div className="w-full md:w-3/4 mx-auto">
                    <label className="text-teal-700 text-lg my-2">Blog title</label>
                    <input
                        className="p-2 mb-4 rounded-lg border border-gray-500 block w-full"
                        placeholder="title..."
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="w-full md:w-3/4 mx-auto">
                    <label className="text-teal-700 text-lg my-2">Blog body</label>
                    <textarea
                        className="p-2 mb-4 rounded-lg border border-gray-500 block w-full h-64 min-h-[100px]"
                        placeholder="content..."
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="w-full md:w-3/4 mx-auto">
                    <label className="text-teal-700 text-lg my-2">Blog author</label>
                    <input
                        className="p-2 mb-4 rounded-lg border border-gray-500 block w-1/2"
                        placeholder="author's name..."
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="w-full md:w-3/4 mx-auto">
                    {!isPending && <button
                     className="border-2 border-teal-700 py-2 px-3 text-teal-700 hover:text-teal-50 hover:bg-teal-700 rounded-xl transition ease-out duration-500"
                     >Add blog</button>}
                    {isPending && <button disabled className="border-2 bg-teal-700 py-2 px-3 text-teal-50 rounded-xl">Adding...</button>}
                </div>
            </form>

        </div>
    );
}

export default Create;