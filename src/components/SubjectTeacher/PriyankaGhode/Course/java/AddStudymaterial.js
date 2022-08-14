import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Studymaterial from "../../../../../api/GhodeMadam/JavaStudymaterial"

function Cancel(){
  window.location.href="/subject-teacher/priyanka-ghode/java/study-material"
}

function  AddStudymaterial() {

  const [date,SetDate] = useState("");
  const [descriptionName,SetDescriptionName] = useState("");
  const [linkName,SetLinkName] = useState("");



  // const history = useHistory();
//avadhut is here
  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const studymaterial = {
      date:date,
      description:descriptionName,
      link:linkName
    }

    console.log(studymaterial);
   const res = await Studymaterial.post("/add-studymaterial",studymaterial);
   console.log(res.data.msg)
   window.location.href="/subject-teacher/priyanka-ghode/java/study-material";
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
          <label>Decsription</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {descriptionName}
          onChange={(e)=>{
            SetDescriptionName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Link</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="subName"
          value ={linkName}
          onChange={(e)=>{
            SetLinkName(e.target.value);
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

export default AddStudymaterial;     