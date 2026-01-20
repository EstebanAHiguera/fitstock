import { Bell, Users, Shield, Database, Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function Settings({ onMenuClick }) {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="size-5" />
          </Button>
          <h1 className="text-[#1a5f3f]">Configuración</h1>
        </div>
        <p className="text-gray-600">Administra las preferencias del sistema</p>
      </div>

      <div className="grid gap-6">
        {/* Notifications */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Bell className="size-5 text-[#1a5f3f]" />
              </div>
              <div>
                <CardTitle className="text-[#1a5f3f]">Notificaciones</CardTitle>
                <CardDescription>Configura las alertas del sistema</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Alertas de mantenimiento</Label>
                <p className="text-sm text-gray-600">
                  Recibe notificaciones cuando un equipo requiera mantenimiento
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Recordatorios de inventario</Label>
                <p className="text-sm text-gray-600">
                  Notificaciones semanales del estado del inventario
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Equipos fuera de servicio</Label>
                <p className="text-sm text-gray-600">
                  Alertas inmediatas cuando un equipo quede inoperativo
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Users */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Users className="size-5 text-[#ffd700]" />
              </div>
              <div>
                <CardTitle className="text-[#1a5f3f]">Gestión de Usuarios</CardTitle>
                <CardDescription>Administra los usuarios del sistema</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a5f3f] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">AD</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Administrador</p>
                    <p className="text-xs text-gray-600">admin@udec.edu.co</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>

              <Button className="w-full bg-[#1a5f3f] hover:bg-[#2a7f5f] text-white">
                Agregar Usuario
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="size-5 text-[#1a5f3f]" />
              </div>
              <div>
                <CardTitle className="text-[#1a5f3f]">Seguridad</CardTitle>
                <CardDescription>Configuración de seguridad del sistema</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Cambiar Contraseña
            </Button>

            <div className="flex items-center justify-between">
              <div>
                <Label>Autenticación de dos factores</Label>
                <p className="text-sm text-gray-600">
                  Agrega una capa extra de seguridad
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Database */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Database className="size-5 text-[#ffd700]" />
              </div>
              <div>
                <CardTitle className="text-[#1a5f3f]">Base de Datos</CardTitle>
                <CardDescription>Gestión y respaldo de datos</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full">
              Crear Respaldo
            </Button>
            <Button variant="outline" className="w-full">
              Exportar Datos
            </Button>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                Último respaldo: 18 Nov 2024, 10:30 AM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
