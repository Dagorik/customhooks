import React, { useState, useEffect } from 'react';

// Mini login
function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const [btnDesactivado, setBtnDesactivado] = useState(true);

  const onLogin = () => {
    alert('Login!!');
    console.log(email);
    console.log(password);
    // Si el email y la contraseña son correctas alert de bienvenida
  }

  const emailInputChange = (e) => {
    // console.log(e.target.value); // --> Obtiene el contenido de input
    setEmail(e.target.value);
  };

  const emailPasswordChange = (e) => {
    // console.log(e.target.value); // --> Obtiene el contenido de input
    setPassword(e.target.value);
  };

  useEffect(() => {
    // Cada vez que alguien cambie email o password se ejecuta useEffect
    if (email === '' || email.length < 10) {
      setBtnDesactivado(true);
    } else {
      setBtnDesactivado(false);
    }
  }, [email, password]);

  return (
    <section>
      <input placeholder='Email' onChange={emailInputChange} />
      <input placeholder='Contraseña' type="password" onChange={emailPasswordChange} />
      <button onClick={onLogin} disabled={btnDesactivado}>Login!</button>
    </section>
  )
}

export default Form;