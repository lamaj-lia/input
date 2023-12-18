import React,{useState} from 'react'
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
export default function App() {
  const [type,setType] = useState("password")
 const hand = ()=>{
  if(type =="password"){
  setType("text")
  }else{
    setType("password")
  }

  }
  return (
    <div className="w-screen h-screen bg-slate-600 flex items-center justify-center shadow-sm">
    <div className="w-96 h-14 rounded-3xl bg-slate-50 flex items-center justify-between p-3">
    <span className='cursor-pointer' onClick={hand}>{type=="text" ?<FaEye />:<IoEyeOff />}</span>
    <input type={type} className="w-full h-full border-none bg-white text-lg text-right"/>
    
  </div>
  </div>
  )
}
