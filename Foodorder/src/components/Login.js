import React from 'react'
import {Field, Formik,Form,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import{Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <Formik initialValues={{name:'',password:''}}
      validationSchema={
        Yup.object({
          name:Yup.string().required("Required"),
          password:Yup.string() .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$","Must contain at least one number and one uppercase and lowercase letter and one Special character, minimum 8 and maximum 16").
                  required("Required")
        })
      }
      onSubmit={()=>{}}
      >
    <div className='bg-slate-200 w-60 md:w-96 mx-10 md:mx-auto my-5 p-5 shadow-xl rounded-xl'>      
          <h2 className='font-serif text-lg font-semibold text-center'>Login Form</h2>
          <Form>
              <label>Username:</label>
              <Field type='text' name='name' className='w-auto md:w-72 border border-black rounded-md p-1 m-2'/>
              <h2 className='text-red-500'><ErrorMessage name='name'/></h2>
              <label>password:</label>
              <Field type='password' name='password' className='w-auto md:w-72 border border-black rounded-md p-1 m-2'/>
              <h2 className='text-red-500'><ErrorMessage name='password'/></h2>
              <button type='submit' className=' m-2 p-1 w-48 md:w-72 bg-blue-400 rounded-md'>Login</button>
          </Form>
          <p>Don't have an account ?<Link to='/signup'><span className='text-lg font-medium'>Signup</span></Link></p>
      </div>
  </Formik>
    </>
  )
}

export default Login