import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Content />
            </div>
        </Router>
    );
}

const Navbar = () => {
    return (
        <nav className=" bg-black navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">Catálogo</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dados">Novo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const Content = () => {
    return (
        <div className="container mt-4">
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="/dados" element={<LivroDados />} />
            </Routes>
        </div>
    );
}

export default App;
