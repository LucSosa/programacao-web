import { Routes, Route } from 'react-router-dom'

import { InclusaoLivros } from "./components/InclusaoLivros";
import { MenuSuperior } from "./components/MenuSuperior";
import { ManutencaoLivros } from "./components/ManutencaoLivros"
import { ResumoLivros } from "./components/ResumoLivros"


export function App() {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path='/' element={<InclusaoLivros />} />
        <Route path='manut' element={<ManutencaoLivros />} />
        <Route path='resumo' element={<ResumoLivros />} />
      </Routes>
    </>
  )
}
