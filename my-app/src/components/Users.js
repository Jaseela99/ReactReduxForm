import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Users = () => {
  const navigate =useNavigate()
  const [name,setName]=React.useState("")
  const [email,setEmail]=React.useState("")
  const [gender,setGender]=React.useState("")
  const [phone,setPhone]=React.useState("")
    const [date, setDate] = useState(new Date());
    const handleChange = date => setDate(date);

    const dispatch =useDispatch()

    const register=(e)=>{
      e.preventDefault()
      dispatch({
        type:"SET_USER",
        payload:{
          name:name,
          email:email,
          date:date,
          gender:gender,
          phone:phone
        }

      })
    }
  return (
    <div className=" flex justify-center h-screen w-full bg-gradient-to-r from-slate-300 to-yellow-100 p-2">
      <form onSubmit={(e)=>register(e)} className="w-1/2 rounded-md flex flex-col justify-center  align-middle p-1 bg-gradient-to-r from-blue-300 to-blue-500">
        <h1 className="font-bold text-4xl m-2 p-1 font-serif">Fill Up To Go!!</h1>
        <div className="p-4">
          <input
          type="text"
          placeholder="FullName"
          value={name}
          onChange={(e)=>setName(e.target.value)}
            className="rounded-md p-2 w-3/4 text-md font-serif"
            required
          />
        </div>
        <div className="p-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="rounded-md p-2 w-3/4 text-md font-serif"
            required
          />
        </div>
        <div className="p-2 w-3/4">
          <input type="radio" name="gender" className="p-1 m-1"   value={gender}
          onChange={(e)=>setGender(e.target.value)} required/> Male
          <input type="radio" name="gender" className="p-1 m-1" value={gender}
          onChange={(e)=>setGender(e.target.value)}  required/>
          Female
          <input type="radio" name="gender" className="p-1 m-1" value={gender}
          onChange={(e)=>setGender(e.target.value)} required />
          Transgender
        </div>
        <div className="p-4">
        <DatePicker selected={date} onChange={handleChange} className="rounded-md p-2 w-3/4 text-md font-serif" required/>
        </div>
        <div className="p-4">
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
          onChange={(e)=>setPhone(e.target.value)} 
            className="rounded-md p-2 w-3/4 text-md font-serif"
            required
          />
        </div>
        <div>
            <button type="button" className="bg-black hover:bg-gray-400 p-3 rounded-md text-white " onClick={()=>
            navigate("/date")}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Users;
