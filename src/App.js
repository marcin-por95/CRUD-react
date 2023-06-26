import { Routes, Route } from 'react-router-dom';
import About from './Components/pages/About/About';
import AddPost from './Components/pages/AddPost/AddPost';
import EditPost from './Components/pages/EditPost/EditPost';
import NotFound from './Components/pages/NotFound/NotFound';
import Post from './Components/pages/Post/Post';
import Home from './Components/pages/Home/Home';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';

import { Container } from 'react-bootstrap';
import React from 'react';
const App = () => {
    return (
    <main>
        <Container>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/post/add" element={<AddPost />} />
                <Route path="/post/edit/:id" element={<EditPost />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </Container>
    </main>
);
};
export default App;
