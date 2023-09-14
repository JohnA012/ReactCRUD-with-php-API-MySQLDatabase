import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser(){
    // use to navigate on which url we want to go
    const navigate = useNavigate();
    // the useState that we are using for updating our database 
    const [inputs,setInputs] = useState([]); 

    const {id} = useParams();

    useEffect(() => {
        getUsers();
    }, []);
    function getUsers(){
        axios.get(`http://localhost:80/api/user/${id}`).then(function(response){
            console.log(response.data);
            setInputs(response.data);
        });
    }

   
    const handleChange = (e) =>{
        console.log(e.target);
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values =>({...values,[name]:value}));
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:80/api/user/${id}/edit`,inputs)
        .then((response)=>{
            console.log(response.data);
            navigate('/');
        });
        console.log(inputs);
        console.log(setInputs);
    }
    
    return(
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                            <input value={inputs.name} type="text" name="name" placeholder="Put a Name" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input value={inputs.email} type="text" name="email"placeholder="Put a Email" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input value={inputs.mobile} type="text" name="mobile" placeholder="Put a Mobile"onChange={handleChange}/>
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

