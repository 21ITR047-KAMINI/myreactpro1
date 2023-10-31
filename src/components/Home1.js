import React,{ useState } from 'react'

function Home1() {
    
    const[counts1,setCounts1]=useState(0);
    function myfunc1()
        {
            setCounts1(counts1+1)
        }
    function myfunc2()
        {
                setCounts1(counts1-1)
        }
        return (
    
            <>
            <button onClick={myfunc1}>Increase</button>
            <span>{counts1}</span>
            <button onClick={myfunc2}>Decrease</button>
            </>
          )
    
    
}

export default Home1