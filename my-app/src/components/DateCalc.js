import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateCalc = () => {

  const form =useSelector((state)=>state)
  console.log(form)
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const handleChange1 = date1 => setDate1(date1);
    const handleChange2 = date2 => setDate2(date2);
   
    
    /* const getSundays=(date1,date2)=>{
      let count =0
      for (var i = date1; i <= date2;i.setDate(i.getDate()+1) ){
        if (i.getDay() == 0)
            count++;
        
      
    }
    return count
    } 
    console.log(getSundays(date1,date2)) */

  return (
    <div className='h-screen w-full bg-gradient-to-r from-green-300 to-slate-400 flex justify-center p-10'>
        <div className='flex flex-col w-3/4 justify-center bg-gradient-to-r from-pink-400 to-slate-400  p-5 rounded-md'>
        
          <div className='m-1 p-2'>
          <h1 className='font-serif text-2xl'>Start Date</h1>
        <DatePicker selected={date1} onChange={handleChange1} className="rounded-md p-2 w-3/4 text-md font-serif" />
        </div>

        <div className='m-1 p-2'>
          <h1 className='font-serif text-2xl'>End Date</h1>
        <DatePicker selected={date2} onChange={handleChange2} className="rounded-md p-2 w-3/4 text-md font-serif" />
        </div>
      <h1 className='font-serif text-2xl'>Number Of Sundays</h1>
       <div className='m-5  bg-white rounded-md p-2 h-1/6'>
        {/*  <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.date}</p>
        <p>{user.gender}</p>
        <p>{user.phone}</p>  */}
          </div> 
          <div>
          <button className="bg-black hover:bg-gray-400 p-3 rounded-md text-white " >Submit</button>
          </div>

        </div>
    </div>
  )
}

export default DateCalc