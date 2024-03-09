import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
function handleClick(){
  alert('btn click')
}
const handleClick2  =()=>{
  alert('btn 2 click')
}
const addToFive =(num) =>{
  alert(num+5)
}


  return (
    <>
    
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
    <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click 2</button>
     <button onClick={()=>{alert('third click')}}>Click 3</button>

<button onClick={() =>addToFive(7)}>click 4</button>
    </>
  )
}

export default App
