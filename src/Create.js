import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog Added');
            setIsPending(false);
            history.push('/');
        })
    }
    return ( 
        <div className="Create">
            <h1>Add the Blog</h1>
            <form onSubmit={handleSubmit}>
               <label >Blog Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                 />
                 <label >Blog Body:</label>
                 <textarea 
                 required
                     value={body}
                     onChange={(e)=>setBody(e.target.value)}
                 ></textarea>
                 <label >Blog Author:</label>
                <input type="text"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                 />
                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button disabled>Adding Blog...</button>}
                
            </form>
        </div>
    );
}
 
export default Create;