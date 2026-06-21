import {
useEffect,
useState
} from "react";

import axios from "axios";
import Sidebar from "../components/Sidebar";

const Settings = () => {

const [form,setForm] =
useState({
portfolioName:"",
email:"",
phone:"",
whatsapp:"",
linkedin:"",
github:"",
instagram:"",
about:""
});

useEffect(()=>{

load();

},[]);

const load =
async()=>{

const res =
await axios.get(
"http://localhost:5000/api/settings"
);

if(res.data){

setForm(res.data);

}

};

const save =
async()=>{

await axios.put(
"http://localhost:5000/api/settings",
form
);

alert(
"Settings Updated"
);

};

return(

<>
<Sidebar/>

<div className="page">

<h1>
Portfolio Settings
</h1>

<input
placeholder="Portfolio Name"
value={form.portfolioName || ""}
onChange={(e)=>
setForm({
...form,
portfolioName:e.target.value
})
}
/>

<input
placeholder="Email"
value={form.email || ""}
onChange={(e)=>
setForm({
...form,
email:e.target.value
})
}
/>

<input
placeholder="Phone"
value={form.phone || ""}
onChange={(e)=>
setForm({
...form,
phone:e.target.value
})
}
/>

<input
placeholder="WhatsApp"
value={form.whatsapp || ""}
onChange={(e)=>
setForm({
...form,
whatsapp:e.target.value
})
}
/>
<input
placeholder="GitHub URL"
value={form.github || ""}
onChange={(e)=>
setForm({
...form,
github:e.target.value
})
}
/>

<input
placeholder="LinkedIn URL"
value={form.linkedin || ""}
onChange={(e)=>
setForm({
...form,
linkedin:e.target.value
})
}
/>

<input
placeholder="Instagram URL"
value={form.instagram || ""}
onChange={(e)=>
setForm({
...form,
instagram:e.target.value
})
}
/>

<input
placeholder="WhatsApp Number"
value={form.whatsapp || ""}
onChange={(e)=>
setForm({
...form,
whatsapp:e.target.value
})
}
/>

<textarea
placeholder="About"
value={form.about || ""}
onChange={(e)=>
setForm({
...form,
about:e.target.value
})
}
/>

<button onClick={save}>
Save Settings
</button>

</div>

</>

);

};

export default Settings;