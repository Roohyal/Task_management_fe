import React  from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const Layout: React.FC = ( { children}) => {
    return (
        <div className="flex">
         <Sidebar/>
         
         <div className="flex-1 flex flex-col">
            <Navbar/>
          
            <main className="flex-1 bg-gray-100 p-6">
               {children}
               </main>
         </div>
        </div>
    );
};

export default Layout;