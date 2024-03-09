// import { useState } from 'react'
import './App.css'

function App() {
  const myName:string='Hanh';
  const myAge:number=20;
  const sum=(a:number,b:number):number=>{
    return a+b;
  }
  function showInfo(props:{name:string,age:number}):string{
    return`Name:${props.name},age:${props.age}`;
  }

  const ShowInfo = (props:{name:string,age:number}):JSX.Element=>{
return <div>
  Name:{props.name}, Age:{props.age}
</div>
  }

  return <div>
    Function : {showInfo({name:"Hank", age:22})}
    <hr />
    Component: <ShowInfo name="Hank" age={22}/>
    <h1>Hello {myName}</h1>
    <h2>My age is {myAge}</h2>
    <h3>Sum is {sum(10,20)}</h3>
  </div>
}

export default App
