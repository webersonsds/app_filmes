import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'
import Erro from './pages/Erro'

function RouterApp() {
    return (
        <BrowserRouter>
        <Header/>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/Filme/:id' element={<Filme />} />


                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp