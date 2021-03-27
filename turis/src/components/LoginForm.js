import React , {useState} from 'react'
import '../styles/Login.css'

export default function LoginForm({Login,error}){
    const [details,setDetails] = useState({phone:''})

    const submitHandler = e => {
        e.preventDefault();

        Login(details)


    }
 



    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>ورود / ثبت نام</h2>
                {/* {(error !== '') ? (<div className='error'>{error}</div>) : ''}
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type='text' name='name' id='name' onChange={e => setDetails({...details,name: e.target.value })} value={details.name}/>
                </div> */}
                <div className="form-group">
                <label htmlFor="Phone number">موبایل:</label>
                <input type='text' name='phone number' id='phone number'onChange={e => setDetails({...details,phone: e.target.value })} value={details.phone}/>
                </div>
                {/* <div className="form-group">
                <label htmlFor="password">password :</label>
                <input type='password ' name='password ' id='password' onChange={e => setDetails({...details,password: e.target.value })} value={details.password}/>
                </div> */}
                <input type="submit" value="تایید"/>
                


            </div>
        </form>

    )



}
