import React,{useState} from "react";

const useSidebar = () => {
    const [sidebar, setSidebar] = useState(true);
  
    const toggleSidebar = () => setSidebar(!sidebar)
  
    return {sidebar, toggleSidebar}
  }

  export default useSidebar