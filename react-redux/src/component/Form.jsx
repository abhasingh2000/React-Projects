import {useState} from 'react'

const Form = () => {
    const[formData , setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpass:''
    })

    const[error , setError] = useState({})

    const handleChange =(e) =>{
        setFormData({
            ...formData , [e.target.name] : [e.target.value]
        })
        setError({})
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

    const validationSchema ={}
      const{username , email , password , confirmpass} = formData;

      if (!username || username.length === 0) {
          validationSchema.username = "Enter Username";
      }
      
      if (!email || email.length === 0) {
          validationSchema.email = "Enter Email";
      }
      
      if (!password || password.length === 0) {
          validationSchema.password = "Enter Password";
      } else if (password.length > 6) {
          validationSchema.password = "Password must be at least 6 characters";
      }
      
      if (!confirmpass || confirmpass.length === 0) {
          validationSchema.confirmpass = "Enter Confirm Password";
      } else if (password !== confirmpass) {
        console.log("Password:",  password  !==  confirmpass);
    console.log("Confirm Password:", confirmpass);
          validationSchema.confirmpass = "Passwords do not match";
      }
      
      console.log(validationSchema);
      
    setError(validationSchema)

    if(Object.keys(validationSchema)?.length == 0){
        alert("No error")
    }
    
    }

console.log(formData , "tyuiop")
  return (
    <div>
      <h1>Form Info</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name = "username" value = {formData.username} onChange={handleChange}/>
        <p>{error && error?.name}</p><br/>
        <input type='email' name = "email" value = {formData.email} onChange={handleChange}/>
        <p>{error && error?.email}</p><br/>
        <input type='password' name = "password" value = {formData.password} onChange={handleChange}/>
        <p>{error && error?.password}</p><br/>

        <input type='password' name = "confirmpass" value = {formData.confirmpass} onChange={handleChange}/>
        <p>{error && error?.confirmpass}</p><br/>


<button type = "submit" onClick = {handleSubmit}>Submit</button>

      </form>
    </div>
  )
}

export default Form
  