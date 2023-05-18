import { useState, useRef } from 'react';
import './App.css';

function App() {

    const inputRef = useRef()
    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
      e.preventDefault()
      const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      const emailValid = expReg.test(inputRef.current.value);
      setError(!emailValid);
    }

    const errorClassName = error ? "error-message-display" : "error-message";
    const inputClassName = error ? "input input-error-display" : "input ";
    

  return (
    <main className='main-container'>
      <section className='logo-container'>
        <img className='logo' src='./assets/images/logo.svg'/>
      </section>
      <section className='hero-container'>
        <img className='hero-mobile' src="./assets/images/hero-mobile.jpg" />
        <img className='hero-desktop' src="./assets/images/hero-desktop.jpg" />
      </section>
      <section className='title-container'>
        <h1 className='title'><span className='title-span'>We're </span>coming soon</h1>
        <p className='description'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
      </section>
      <form className='form-container' onSubmit={handleSubmit}>
        <input ref={inputRef} className={inputClassName} type='email' placeholder='Email Address'/>
        <button type="submit" className='icon-container'>
          <img src="/assets/images/icon-arrow.svg" alt='icon-arrow' className='icon-arrow'/>
        </button>
        <p className={errorClassName}>Please provide a valid E-mail</p>
      </form>
    </main>
  )
}

export default App;
