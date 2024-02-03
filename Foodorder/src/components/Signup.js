import React from 'react'
import{Formik,Form,Field, ErrorMessage} from'formik'
import * as Yup from 'yup'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  const navigate=useNavigate()
  return (
    <>
    <ToastContainer theme='colored'/>
        <Formik initialValues={{name:'',email:'',password:''}}
        validationSchema={Yup.object({
            name:Yup.string().required('Required'),
            email:Yup.string().email("Invalid Email").required("Required"),
            password:Yup.string().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$","Must contain at least one number and one uppercase and lowercase letter and one Special character, minimum 8 and maximum 16").
                    required("Required")
        })}
        onSubmit={async(values)=>{

          fetch("https://foodapp-json.onrender.com/users",{           
              method:"POST",
              headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
           })
           toast.success("Successfully registered")
           const timer=setTimeout(()=>{
             navigate('/login')
           },0)
            return ()=>clearTimeout(timer)
        }}
        >
        <div className='bg-slate-200 w-60 md:w-96 mx-10 md:mx-auto my-5 p-5 shadow-md rounded-lg'>
            <h2 className='font-serif text-lg font-semibold text-center'>Signup Form</h2>
            <Form>
                <label>Fullname:</label>
                <Field type='text' name='name'className='w-auto md:w-72 border border-black rounded-md p-1 m-2'/>
                <h2 className='text-red-500'><ErrorMessage name='name'/></h2>
                <label>Email:</label>
                <Field type='email' name='email' className='w-auto md:w-72 border border-black rounded-md p-1 m-2'/>
                <h2 className='text-red-500'><ErrorMessage name='email'/></h2>

                <label>password:</label>
                <Field type='password' name='password' className='w-auto md:w-72 border border-black rounded-md p-1 m-2'/>
                <h2 className='text-red-500'><ErrorMessage name='password'/></h2>
                <button type='submit' className=' m-2 p-1 w-48 md:w-72 bg-blue-400 rounded-md'>Signup</button>
            </Form>
            <p>Already have an account ?<Link to='/login'><span className='text-lg font-medium'>Login</span></Link></p>
        </div>
        </Formik>
    </>
  )
}

export default Signup
