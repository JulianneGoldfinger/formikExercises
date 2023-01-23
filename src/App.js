import React from 'react';
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {};
      if(!values.password) errors.password = 'field required';
      if (!values.email) {
        errors.email = 'field required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'username should be an email';
    }
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} id="emailField"/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" name="password" onChange={formik.handleChange} value={formik.values.password} id="pswField"/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}} >{formik.errors.password}</div> : null}                
        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}

export default App;
