import Page from '../components/page';
import {useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch'

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  })
  function handleChange(e) {
    e.preventDefault();
    setState({...state, [e.target.name]: e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    alert(`name: ${state.name}\nemail: ${state.email}\npassword: ${state.password}`)
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(state)
    }).then(res => res.json()).then(data => console.log(data))
    setState({name: '', email: '', password: ''})
  }
  return (
    <Page title="Sign Up">
  <div>
    <form onSubmit={handleSubmit}>
      <label>Sign Up</label>
      <input type="text" value={state.name} name="name" onChange={handleChange} placeholder="name" required/>
      <input type="email" value={state.email} name="email" onChange={handleChange} placeholder="email" required/>
      <input type="password" value={state.password} name="password" onChange={handleChange} placeholder="password" required/>
      <input type="submit" />
    </form>  
  </div>
    <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        form {
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          padding: 10px; 
          margin: 10px;
          border: 1px solid #ccc;
          border-radius: 3px; 
        }
        input[type="submit"]{
          background: forestgreen;
          border: none;
          color: white;
          border-radius: 5px;
        }
      `}</style>
    </Page>
)}

export default Register;
