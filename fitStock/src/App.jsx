import { useState } from 'react';
import {Sidebar} from "./components/sidebar";
import {Dashboard} from "./components/Dashboard";
import {InventoryList} from "./components/InventoryList";
import {Reports} from "./components/Reports";
import {Settings} from "./components/Settings";
import {Login} from "./components/Login";

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogin = (email, password) => {
    // Demo login - verificar credenciales
    if (email === 'admin@udec.edu.co' && password === '1234567') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onLogout={handleLogout}
      />
      <main className="flex-1 bg-gray-50">
        {currentView === 'dashboard' && (
          <Dashboard onMenuClick={() => setIsSidebarOpen(true)} />
        )}
        {currentView === 'inventory' && (
          <InventoryList onMenuClick={() => setIsSidebarOpen(true)} />
        )}
        {currentView === 'reports' && (
          <Reports onMenuClick={() => setIsSidebarOpen(true)} />
        )}
        {currentView === 'settings' && (
          <Settings onMenuClick={() => setIsSidebarOpen(true)} />
        )}
      </main>
    </div>
  );
}
