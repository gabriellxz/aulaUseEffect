import { useEffect, useState } from 'react'
import './App.css'
import FindProduto from './data'

function App() {

  const [prodId, setProdId] = useState(1)
  const [prod, setProd] = useState<any>(FindProduto(prodId))

  useEffect(() => {
    setProd(FindProduto(prodId))
  }, [prodId])

  function handleClick() {
    setProdId(2)
  }

  return (
    <main>
      <h1>Produto</h1>
      <div className='card'>
        <img src={prod.imgUrl} alt="" />
        <div className='card-infor'>
          <h2>{prod.nome}</h2>
          <p>R$ {prod.price}</p>
        </div>
        <button onClick={handleClick}>Próximo</button>
      </div>
    </main>
  )
}

export default App
