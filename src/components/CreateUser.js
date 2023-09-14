import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUser(){
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({}); 
     // Monitor the changes inside the input and updating it until the user submit
    const handleChange = (e) =>{
        console.log(e.target);
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values =>({...values,[name]:value}));
    }
    // to prevent the user put the data inside the database if one of the inputs are null or empty and navigate the user in the list users
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:80/api/user/save',inputs)
        .then((response)=>{
            console.log(response.data);
            navigate('/');
        });
        console.log(inputs);
        console.log(setInputs);
    }
    
    return(
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                            <input type="text" name="name" placeholder="Put a Name" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email"placeholder="Put a Email" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" placeholder="Put a Mobile"onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <input type="submit" name="submit"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
               

            </form>
        </div>
        
    )
}

