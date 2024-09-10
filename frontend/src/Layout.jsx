
import {BrowserRouter,Route,Routes} from "react-router-dom";
import SignIn from "./pages/Sign_In";
import SignUp from "./pages/Sign_up";


const Layout = ()=>{
    return(
        <BrowserRouter>

        <Routes>
        {/* the dynamic contents comes in here */}
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        

        </Routes>

        </BrowserRouter>
    )
}

export default Layout