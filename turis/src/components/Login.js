import React , {useState} from 'react'
import LoginForm from './LoginForm'
import ValidationForm from './ValidationForm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  '../styles/Login.css'
import '../../src/index.css'
export default function Login(){
    const adminUser = {
        phone :"9332130696",
               
    }
    const validNumber ={
        validate: '1234'
    }
    const [user , setUser] = useState({ phone:'',})
    const [error , setError] = useState('')
    const [uservalidate , setValidate]=useState({validate:''})
    const Login = details => {
        console.log(details)
        
        if (details.phone === adminUser.phone ){
             console.log("logged in")
             setUser({
                 
                 phone:details.phone
             })
        }else{
            console.log('not match')
            setError('not match')
        }
        if(details.validate=== validNumber.validate){
            console.log('logged in')
            setUser({
                validate:details.validate
            })
        }else{
            console.log('not match')
            setError('not match')
        }
      
    }


    const Logout = () => {
        console.log('Logout')
        setUser({name:'',phone:''})
        


    }



    return(


        <div className='Login'>
            {(user.phone !== '') ? (
                <ValidationForm/>
               
                // <div className="welcome">
                // {/* <h2>Welcome , <span> {user.name} </span></h2> */}
                // <h2>Welcome</h2>
                // <button onClick={Logout}>Logout</button>
                // </div>
                
            ) : ( <LoginForm Login={Login} error={error}/>


            )}
             


        </div>
    )



}
