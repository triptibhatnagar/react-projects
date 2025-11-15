import Chai from "./Chai"

function App() {
  const username = "hiteshhhh"
  // write js evaluation here
  return (
    <>
      <h1>Chai aur react wth vite {username}</h1>
      {/* {} -> evaluated expression (we write final evaluated outcome of js, not the js)*/}
      {/* means u can't write {if(true) username} */}
      <Chai/>
    </>
  )
}

export default App