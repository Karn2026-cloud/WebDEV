import {
useState,
useEffect
} from "react";

import axios from "axios";
import Sidebar from "../components/Sidebar";

const ContentManager = () => {

const [form,setForm] =
useState({

heroTitle:"",
heroSubtitle:"",
heroDescription:"",

aboutTitle:"",
aboutDescription:"",

servicesTitle:"",
servicesDescription:""

});

useEffect(()=>{

loadContent();

},[]);

const loadContent =
async()=>{

const res =
await axios.get(
"http://localhost:5000/api/content"
);

setForm(res.data);

};

const saveContent =
async()=>{

await axios.put(
"http://localhost:5000/api/content",
form
);

alert(
"Content Updated Successfully"
);

};

return(

<>
<Sidebar/>

<div className="page">

<h1>
Portfolio Content
</h1>

<input
placeholder="Hero Title"
value={form.heroTitle || ""}
onChange={(e)=>
setForm({
...form,
heroTitle:e.target.value
})
}
/>

<input
placeholder="Hero Subtitle"
value={form.heroSubtitle || ""}
onChange={(e)=>
setForm({
...form,
heroSubtitle:e.target.value
})
}
/>

<textarea
placeholder="Hero Description"
value={form.heroDescription || ""}
onChange={(e)=>
setForm({
...form,
heroDescription:e.target.value
})
}
/>

<input
placeholder="About Title"
value={form.aboutTitle || ""}
onChange={(e)=>
setForm({
...form,
aboutTitle:e.target.value
})
}
/>

<textarea
placeholder="About Description"
value={form.aboutDescription || ""}
onChange={(e)=>
setForm({
...form,
aboutDescription:e.target.value
})
}
/>

<input
placeholder="Services Title"
value={form.servicesTitle || ""}
onChange={(e)=>
setForm({
...form,
servicesTitle:e.target.value
})
}
/>

<textarea
placeholder="Services Description"
value={form.servicesDescription || ""}
onChange={(e)=>
setForm({
...form,
servicesDescription:e.target.value
})
}
/>

<button
onClick={saveContent}
>
Save Content
</button>

</div>

</>

);

};

export default ContentManager;