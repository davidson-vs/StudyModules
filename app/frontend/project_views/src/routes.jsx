import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./views/login" 
import Index from "./views/index"
import CadastroUser from "./views/cadastroUser"

const AppRouters = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/user" element={<Index/>}/>
                <Route path="/cadastro-user" element={<CadastroUser/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouters