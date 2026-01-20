import { Clock } from "lucide-react";

const activities = [
  { action: "Nuevo equipo agregado", item: "Caminadora TechnoGym", time: "Hace 2 horas", type: "success" },
  { action: "Mantenimiento programado", item: "Bicicleta estática #12", time: "Hace 4 horas", type: "warning" },
  { action: "Equipo reparado", item: "Elíptica Matrix", time: "Hace 1 día", type: "success" },
  { action: "Reporte de falla", item: "Banco de pesas #7", time: "Hace 1 día", type: "error" },
  { action: "Inventario actualizado", item: "Mancuernas 5kg", time: "Hace 2 días", type: "info" },
];

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex gap-3 pb-4 border-b border-gray-100 last:border-0"
        >
          <div
            className={`w-2 h-2 rounded-full mt-2 ${
              activity.type === "success"
                ? "bg-green-500"
                : activity.type === "warning"
                ? "bg-[#ffd700]"
                : activity.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          />
          <div className="flex-1">
            <p className="text-sm text-gray-900">{activity.action}</p>
            <p className="text-xs text-[#1a5f3f]">{activity.item}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <Clock className="size-3" />
              {activity.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
