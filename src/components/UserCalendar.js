import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario

const UserCalendar = ({ user }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={styles.container}>
      
      <div style={styles.sidebar}>
        <h3>Datos del usuario</h3>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Teléfono:</strong> {user.phone}</p>
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Contraseña:</strong> {user.password}</p>
        <p><strong>Estatus:</strong> {user.password}</p>
      </div>

      
      <div style={styles.calendarBox}>
        <h3>Calendario</h3>
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    padding: '30px',
    backgroundColor: '#f0f4f8'
  },
  sidebar: {
    width: '35%',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    marginRight: '20px'
  },
  calendarBox: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default UserCalendar;
