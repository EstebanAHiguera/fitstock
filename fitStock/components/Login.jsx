import { useState } from "react";
import {
  Dumbbell,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1a5f3f] to-[#2a7f5f] p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#ffd700] rounded-xl flex items-center justify-center">
              <Dumbbell className="size-7 text-[#1a5f3f]" />
            </div>
            <div>
              <h1 className="text-white text-2xl">FitStock</h1>
              <p className="text-green-200 text-sm">
                Inventario Gimnasio UDEC
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-16">
            <h2 className="text-white text-3xl">
              Gestiona el inventario de tu gimnasio de forma eficiente
            </h2>
            <p className="text-green-100 text-lg">
              Sistema completo de control de equipos, mantenimiento y reportes
              para el Gimnasio de la Universidad de Cundinamarca.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-[#ffd700] text-2xl mb-1">124</p>
            <p className="text-white text-sm">Equipos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-[#ffd700] text-2xl mb-1">98%</p>
            <p className="text-white text-sm">Disponibles</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-[#ffd700] text-2xl mb-1">24/7</p>
            <p className="text-white text-sm">Monitoreo</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#ffd700] rounded-xl flex items-center justify-center">
              <Dumbbell className="size-7 text-[#1a5f3f]" />
            </div>
            <div>
              <h1 className="text-[#1a5f3f] text-2xl">FitStock</h1>
              <p className="text-gray-600 text-sm">
                Inventario Gimnasio UDEC
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-[#1a5f3f] mb-2">Iniciar Sesión</h2>
            <p className="text-gray-600">
              Ingresa tus credenciales para acceder al sistema
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@udec.edu.co"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked)
                  }
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Recordarme
                </Label>
              </div>
              <button
                type="button"
                className="text-sm text-[#1a5f3f] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#1a5f3f] hover:bg-[#2a7f5f] text-white"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Universidad de Cundinamarca © 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
