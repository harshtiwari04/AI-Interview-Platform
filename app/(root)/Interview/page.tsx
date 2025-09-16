import React from 'react'
import Agent from "@/Components/agent";


const Page = () => {
    return (
        <>
           <h3> Interview Generartion</h3>
            <Agent username={"You"} userId={"user1"} type={"generate"}/>
        </>
    )
}
export default Page
