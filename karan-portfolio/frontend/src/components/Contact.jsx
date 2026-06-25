import { useState } from "react";
import axios from "axios";

const Contact = () => {

const [form,setForm] =
useState({

name:"",
email:"",
phone:"",
message:""

});

const handleChange =
(e)=>{

setForm({
...form,
[e.target.name]:
e.target.value
});

};

const handleSubmit =
async(e)=>{

e.preventDefault();

try{

await axios.post(
"https://webdev-1-jsp7.onrender.com/api/messages",
form
);

alert(
"Message Sent Successfully!"
);

setForm({
name:"",
email:"",
phone:"",
message:""
});

}catch(err){

alert(
"Failed To Send Message"
);

}

};

return(

<section
className="contact"
>

<h2>
Contact Me
</h2>

<form
onSubmit={handleSubmit}
>

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
required
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Message"
value={form.message}
onChange={handleChange}
required
/>

<button
type="submit"
>
Send Message
</button>

</form>

</section>

);

};

export default Contact;
