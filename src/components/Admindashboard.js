import React, { useState } from 'react';

function AdminDashboard({ onLogout }) {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <h2>Página de inicio del administrador</h2>;
      case 'menu':
        return <h2>Gestión del menú escolar</h2>;
      case 'calendar':
        return <h2>Calendario escolar administrativo</h2>;
      case 'students':
        return <StudentsSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#34495e',
        padding: '10px 20px',
       color: 'white'
      }}>
        <div>
          <button onClick={() => setActiveSection('home')} style={navBtnStyle}>Home</button>
          <button onClick={() => setActiveSection('menu')} style={navBtnStyle}>Menú</button>
          <button onClick={() => setActiveSection('calendar')} style={navBtnStyle}>Calendario</button>
          <button onClick={() => setActiveSection('students')} style={navBtnStyle}>Alumnos</button>
        </div>
        <button onClick={onLogout} style={{ ...navBtnStyle, color: 'white' }}>
          Cerrar sesión
        </button>
      </nav>

       <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
         <section>
          {renderContent()}
         </section>
       </div>
    </div>
  );
}

function StudentsSection() {
  // Puedes cambiar esto por datos reales o cargar desde un backend
  const data = {
    "1°": {
      A: ['Juan Pérez', 'Ana Torres'],
      B: ['Luis Díaz', 'Sofía López']
    },
    "2°": {
      A: ['Mario Gómez', 'Elena Ruiz'],
      B: ['Laura Fernández', 'Carlos Sánchez']
    }
  };

  return (
    <div>
      <h2>Listado de Alumnos</h2>
      {Object.entries(data).map(([grado, grupos]) => (
        <div key={grado} style={{ marginBottom: '1rem' }}>
          <h3>{grado}</h3>
          {Object.entries(grupos).map(([grupo, alumnos]) => (
            <div key={grupo} style={{
              backgroundColor: '#ecf0f1',
              padding: '15px',
              borderRadius: '8px',
              margin: '10px 0',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'              
              }}>
              <strong>Grupo {grupo}:</strong>
              <ul>
                {alumnos.map((alumno, i) => (
                  <li key={i}>{alumno}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  alignItems: 'center',
  marginRight: '10px'
};

export default AdminDashboard;
