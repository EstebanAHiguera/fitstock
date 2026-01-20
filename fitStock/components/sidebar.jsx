import {
  LayoutDashboard,
  Package,
  FileText,
  Settings as SettingsIcon,
  Dumbbell,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

export function Sidebar({
  currentView,
  onViewChange,
  isOpen,
  onToggle,
  onLogout,
}) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "inventory", label: "Inventario", icon: Package },
    { id: "reports", label: "Reportes", icon: FileText },
    { id: "settings", label: "Configuración", icon: SettingsIcon },
  ];

  const handleViewChange = (view) => {
    onViewChange(view);

    // Cierra el sidebar en móvil
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  return (
    <>
      {/* Overlay móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          bg-[#1a5f3f] text-white flex flex-col
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "w-64" : "w-0 lg:w-20"}
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Botón toggle desktop */}
        <button
          onClick={onToggle}
          className="hidden lg:flex absolute -right-3 top-8 w-6 h-6 bg-[#1a5f3f] border-2 border-white rounded-full items-center justify-center hover:bg-[#2a7f5f]"
        >
          {isOpen ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          )}
        </button>

        {/* Header */}
        <div className="p-6 border-b border-[#2a7f5f]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ffd700] rounded-lg flex items-center justify-center">
                <Dumbbell className="size-6 text-[#1a5f3f]" />
              </div>
              {isOpen && (
                <div>
                  <h1>FitStock</h1>
                  <p className="text-xs text-green-200">
                    Inventario Gimnasio UDEC
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={onToggle}
              className="lg:hidden p-2 hover:bg-[#2a7f5f] rounded-lg"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleViewChange(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                      isActive
                        ? "bg-[#ffd700] text-[#1a5f3f]"
                        : "hover:bg-[#2a7f5f]"
                    } ${!isOpen ? "justify-center" : ""}`}
                  >
                    <Icon className="size-5" />
                    {isOpen && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#2a7f5f] space-y-3">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full text-white border-white/20 hover:bg-[#2a7f5f]"
          >
            <LogOut className="size-4" />
            {isOpen && "Cerrar Sesión"}
          </Button>
        </div>
      </aside>
    </>
  );
}
