import React, { useState } from 'react';

function Register({ onRegister, goToLogin }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Validación simple
    if (!name || !phone || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const newUser = {
      name,
      phone,
      email,
      password,
      role: 'user' // por defecto, usuario normal
    };

    onRegister(newUser); // Pasar el nuevo usuario al componente principal
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Registrarse</button>
        </form>

        <p style={{ marginTop: 15 }}>
          ¿Ya tienes cuenta? <button onClick={goToLogin} style={styles.linkBtn}>Iniciar sesión</button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#d4edda',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0
  }
};

export default Register;
