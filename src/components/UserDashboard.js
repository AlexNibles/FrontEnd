import React, { useState } from 'react';
import UserCalendar from './UserCalendar';


function UserDashboard({onLogout}) {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <h2>Página de inicio del usuario</h2>;
      case 'menu':
        return <h2>Sección de menú de desayuno</h2>;
        case 'calendar':
          return <UserCalendar user={{ name: 'Juan Pérez', phone: '1234567890', email: 'juan@example.com', password: 'secreta' }} />;        
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
        backgroundColor: '#4a90e2',
        padding: '10px 20px',
        color: 'white'
      }}>
        <div>
          <button onClick={() => setActiveSection('home')} style={navBtnStyle}>Home</button>
          <button onClick={() => setActiveSection('menu')} style={navBtnStyle}>Menú</button>
          <button onClick={() => setActiveSection('calendar')} style={navBtnStyle}>Calendario</button>
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

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  alignItems: 'center',
  marginRight: '10px'
};


export default UserDashboard;
