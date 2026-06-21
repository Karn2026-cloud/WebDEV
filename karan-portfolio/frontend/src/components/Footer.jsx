import {
FaGithub,
FaLinkedin,
FaInstagram
} from "react-icons/fa";

import {
useEffect,
useState
} from "react";

import axios from "axios";

const Footer = () => {

const [settings,
setSettings] =
useState({});

useEffect(()=>{

axios.get(
"http://localhost:5000/api/settings"
)
.then(res=>{

setSettings(
res.data
);

});

},[]);

return(

<footer className="footer">

<div className="container">

<h2 className="footer-logo">

Karan.dev

</h2>

<div className="footer-socials">

<a
href={settings.github}
target="_blank"
rel="noreferrer"
>
<FaGithub/>
</a>

<a
href={settings.linkedin}
target="_blank"
rel="noreferrer"
>
<FaLinkedin/>
</a>

<a
href={settings.instagram}
target="_blank"
rel="noreferrer"
>
<FaInstagram/>
</a>

</div>

</div>

</footer>

);

};

export default Footer;