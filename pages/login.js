import Page from '../components/page';
import Router from 'next/router';
import {useState, useEffect} from 'react';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  function handleChange(e) {
    e.preventDefault();
    setState({...state, [e.target.name]: e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(state)
    }).then(res => res.json())
      .then(data => {
        alert(data.mssg);
        if(data.token) document.cookie = `token=${data.token};`
        location.reload()
      })
    setState({email: '', password: ''})
  }
  return (
    <Page title="Sign In">
  <div>
    <form onSubmit={handleSubmit}>
      <label>Sign In</label>
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

export default Login;
