import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
import "./AddLeave.css"

import Ghodeleave from "../../../../api/GhodeMadam/Ghodeleave"

function Cancel(){
  window.location.href="/subject-teacher/priyanka-ghode/leave"
}

function  AddGhodeleave() {

  const [date,SetDate] = useState("");
  const [fnameName,SetFnameName] = useState("");
  const [lnameName,SetLnameName] = useState("");
  const [designationName,SetDesignationName] = useState("");
  const [NoOfDays,SetNoOfDays] = useState("");
  const [TypeOfDays,SetTypeOfDays] = useState("");
  const [emailName,SetEmailName] = useState("");
  const [resName,SetResName] = useState("pending");

  const handelLeave = (e) => {
    SetTypeOfDays(e.target.value);
  };

  // const history = useHistory();
//avadhut is here
  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const ghodeleave = {
      date:date,
      fname:fnameName,
      lname:lnameName,
      designation: designationName,
      NoDays: NoOfDays,
      TypeDays: TypeOfDays,
      email:emailName,
      response: resName
    }

    console.log(ghodeleave);
   const res = await Ghodeleave.post("/add-ghodeleave",ghodeleave);
   console.log(res.data.msg)
   window.location.href="/subject-teacher/priyanka-ghode/leave";
  //  if(res.data.msg =="success"){
  //   //  history.push("/subject-teacher-dashboard");
  //  }
  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        <div>
          <label>Date</label><br/>
          <input 
          className='input-box'
          type = "date"
          name="date"
          value={date}
          onChange={(e) => {
            SetDate(e.target.value);
          }}
          />
        </div>
        <div>
          <label>First Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {fnameName}
          onChange={(e)=>{
            SetFnameName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Last Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="subName"
          value ={lnameName}
          onChange={(e)=>{
            SetLnameName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Designation</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {designationName}
          onChange={(e)=>{
            SetDesignationName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>No Of Days</label><br/>
          <input 
          className='input-box'
          type ="number"
          name ="activityName"
          value = {NoOfDays}
          onChange={(e)=>{
            SetNoOfDays(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Type of Leave</label><br/>
          {/* <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {TypeOfDays}
          onChange={(e)=>{
            SetTypeOfDays(e.target.value);
          }}
          /> */}

                    <select
                        className='input-box res-box'
                        value={TypeOfDays}
                        required
                        onChange={handelLeave}
                        
                      >
                        <option value=""> </option>
                        <option value="Casual">Casual</option>
                        <option value="Medical">Medical</option>
                        <option value="Other">Earned</option>
                      </select>
        </div>
        <div>
          <label>Email</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {emailName}
          onChange={(e)=>{
            SetEmailName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Response</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {resName}
          disabled={true}
          onChange={(e)=>{
            SetResName(e.target.value);
          }}
          />
        </div>
       

        <input className ="subButton" type="submit" value="Submit"/>
        <input className ="cancelButton" type="button" onClick={Cancel} value="Cancel"/>
      </form>
    </div>
    </div>
  )
}

export default AddGhodeleave;     