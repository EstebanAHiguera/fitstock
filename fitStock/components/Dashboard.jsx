import { Package, AlertTriangle, TrendingUp, CheckCircle, Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { EquipmentChart } from "./EquipmentChart";
import { RecentActivity } from "./RecentActivity";
import { Button } from "./ui/button";

export function Dashboard({ onMenuClick }) {
  const stats = [
    {
      title: "Total Equipos",
      value: "124",
      icon: Package,
      color: "bg-[#1a5f3f]",
      textColor: "text-[#1a5f3f]",
      change: "+12%",
      changeType: "positive",
    },
    {
      title: "Estado Óptimo",
      value: "98",
      icon: CheckCircle,
      color: "bg-[#2a7f5f]",
      textColor: "text-[#2a7f5f]",
      change: "+5%",
      changeType: "positive",
    },
    {
      title: "Requieren Mantenimiento",
      value: "18",
      icon: AlertTriangle,
      color: "bg-[#ffd700]",
      textColor: "text-[#ffd700]",
      change: "-3%",
      changeType: "negative",
    },
    {
      title: "Fuera de Servicio",
      value: "8",
      icon: TrendingUp,
      color: "bg-red-500",
      textColor: "text-red-500",
      change: "-2",
      changeType: "positive",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="size-5" />
          </Button>
          <div>
            <h1 className="text-[#1a5f3f] mb-2">
              Bienvenido a FitStock
            </h1>
            <p className="text-gray-600">
              Gimnasio Universidad de Cundinamarca
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <h2 className={stat.textColor}>{stat.value}</h2>
                    <p
                      className={`text-xs mt-1 ${
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stat.change} vs mes anterior
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="size-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#1a5f3f]">
                Distribución de Equipos por Categoría
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentChart />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#1a5f3f]">
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
