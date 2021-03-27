import React , {useState} from 'react'
import '../styles/Login.css'

export default function ValidationForm({Validation,error}){
    const [details,setDetails] = useState({validate:''})

    const submitHandler = e => {
        e.preventDefault();

        Validation(details)


    }
 



    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2> کد تایید را وارد کنید</h2>
                
                <div className="form-group">
                <label htmlFor="Phone number">کد تایید</label>
                <input type='text' name='phone number' id='phone number'onChange={e => setDetails({...details,validate: e.target.value })} value={details.validate}/>
                </div>
        
                <input type="submit" value="تایید"/>
                


            </div>
        </form>

    )



}
