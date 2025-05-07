import React, { useState } from 'react';
import { users } from '../users';

function Login({ onLogin, goToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      onLogin(user); 
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" style={{ width: '100px', marginBottom: '1rem' }} />
          <div style={styles.subtitle}>Bienvenido al Sistema Escolar de desayunos.</div>
        </div>

        <h2 style={{ marginBottom: '1rem' }}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
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
          <button type="submit" style={styles.button}>Entrar</button>
          <p style={{ marginTop: 15 }}>
            ¿No tienes cuenta?{' '}
           <button onClick={goToRegister} style={styles.button}>Registrarse</button>
          </p>
          {error && <p style={styles.error}>{error}</p>}
        </form>
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
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '1.5rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    opacity: 0,
    transform: 'translateY(-20px)',
    animation: 'fadeInUp 0.6s ease forwards'
  },
  
  logoContainer: {
    marginBottom: '1.5rem'
  },
  logoPlaceholder: {
    width: '80px',
    height: '80px',
    backgroundColor: '#e9ecef',
    borderRadius: '50%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#495057'
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
  error: {
    color: 'red',
    marginTop: '10px'
  }
};

export default Login;
