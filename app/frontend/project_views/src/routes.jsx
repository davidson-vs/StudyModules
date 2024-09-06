import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./views/login" 
import Index from "./views/index"

const AppRouters = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/user" element={<Index/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouters