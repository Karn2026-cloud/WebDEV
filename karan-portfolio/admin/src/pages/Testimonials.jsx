import {
useState,
useEffect
} from "react";

import axios from "axios";
import Sidebar from "../components/Sidebar";

const Testimonials = () => {

const [items,setItems] =
useState([]);

const [form,setForm] =
useState({
name:"",
company:"",
review:"",
rating:5
});

useEffect(()=>{
load();
},[]);

const load =
async()=>{

const res =
await axios.get(
"http://localhost:5000/api/testimonials"
);

setItems(res.data);

};

const add =
async()=>{

await axios.post(
"http://localhost:5000/api/testimonials",
form
);

load();

};

const remove =
async(id)=>{

await axios.delete(
`http://localhost:5000/api/testimonials/${id}`
);

load();

};

return(

<>
<Sidebar/>

<div className="page">

<h1>
Testimonials
</h1>

<input
placeholder="Client Name"
onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}
/>

<input
placeholder="Company"
onChange={(e)=>
setForm({
...form,
company:e.target.value
})
}
/>

<textarea
placeholder="Review"
onChange={(e)=>
setForm({
...form,
review:e.target.value
})
}
/>

<button onClick={add}>
Add Testimonial
</button>

{items.map(item=>(

<div
key={item._id}
className="card"
>

<h3>
{item.name}
</h3>

<p>
{item.company}
</p>

<p>
{item.review}
</p>

<button
onClick={()=>
remove(item._id)
}
>
Delete
</button>

</div>

))}

</div>

</>

);

};

export default Testimonials;