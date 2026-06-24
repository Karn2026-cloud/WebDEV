import { FaWhatsapp } from "react-icons/fa";
import {
useState,
useEffect
} from "react";
import axios from "axios";

const WhatsAppButton = () => {

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

<a
href={`https://wa.me/${settings.whatsapp}`}
className="whatsapp-btn"
target="_blank"
rel="noreferrer"
>

<FaWhatsapp/>

</a>

);

};

export default WhatsAppButton;