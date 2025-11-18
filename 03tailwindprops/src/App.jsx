import Card from "./components/Card"

function App() {
  let myObj = {
    username: "hiteshh",
    age: 61
  }
  let myArr = [1,2,3]
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 p-4 text-red-600 rounded-4xl m-4">
        Hello world!
      </h1>
      {/* <Card username="hiteshhhsirr" obj={myObj} arr={myArr}/> */}
      <Card username="hiteshhhsirr" btnText="React kyu pdhre ho???"/>
      <Card username="sirrrjiiii" btnText="React pdhlooo"/>
      <Card username="sirrrjiiii"/>
    </>
  )
}

export default App