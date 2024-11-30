import React, { useState, memo, useEffect, useMemo, useCallback } from 'react'
import './App.css'

function App() {
  
  const [score, setScore] = useState(100);
  const [inputValue, setInputValue] = useState('');
  const [sum, setSum] = useState(0);
  const [s, ss] = useState(10);
  const [x,sx] = useState(0);

  useEffect(() => {
    let sum = 0;
    for(let i=1;i<=inputValue; i++) {
      sum += i;
    }
    setSum(sum);
  }, [ inputValue ])

  const newSum = useMemo((n) => {
    let sum = 0;
    console.log('inside of calculation')
    for(let i=1;i<=n; i++) {
      sum += i;
    }
   return sum;
  }, [inputValue])

  const functionToChild = useCallback(() => {
    console.log('Isndie of usecallback')
    ss(s + 1);
  }, [s])



  return (<React.Fragment>
    <button onClick={() => sx(x + 1)}>Change the button component</button>
    <button onClick={() => setScore(score + 1)}>Add counter</button>
      {score}

      <ButtonComponent  functionToChild={functionToChild} s={s}/>
  </React.Fragment>
  )
}

const ButtonComponent = React.memo(function xyz({functionToChild, s}) {
  console.log('Button component', functionToChild)
  return (<div onClick={functionToChild}>
    <h3>This is the button component {s}</h3>
  </div>)
})

const TextComponent = ({ text }) => {
  return <div>
    {text}
    <br></br>
    Text Component
  </div>  
}

const ScoreComponent = ({ score }) => {
  console.log('Re-render of score component')
  useEffect(()=> {
    console.log('Score changes from parent')
  }, [score])

  return <div>
    {score}
    <br></br>
    Score Component
  </div>
}

const CardWrapper = ({ children }) => {
  return (<div style={{ border: "2px solid black"}}>
    {children}
  </div>)
}


export default App;
