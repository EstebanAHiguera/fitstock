import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import {
  Calendar,
  MapPin,
  Package,
  Hash,
  Award,
} from 'lucide-react';

export function EquipmentDetailsDialog({
  open,
  onOpenChange,
  equipment,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Óptimo':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Mantenimiento':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Fuera de Servicio':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#1a5f3f]">
            Detalles del Equipo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Header Info */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[#1a5f3f] mb-1">
                {equipment.name}
              </h2>
              <p className="text-gray-600">
                ID: #{equipment.id}
              </p>
            </div>

            <Badge className={getStatusColor(equipment.status)}>
              {equipment.status}
            </Badge>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Package className="size-5 text-[#1a5f3f]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Categoría
                  </p>
                  <p className="text-gray-900">
                    {equipment.category}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="size-5 text-[#1a5f3f]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Marca
                  </p>
                  <p className="text-gray-900">
                    {equipment.brand}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Hash className="size-5 text-[#1a5f3f]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Modelo
                  </p>
                  <p className="text-gray-900">
                    {equipment.model}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Hash className="size-5 text-[#ffd700]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Número de Serie
                  </p>
                  <p className="text-gray-900">
                    {equipment.serialNumber}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Calendar className="size-5 text-[#ffd700]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Fecha de Adquisición
                  </p>
                  <p className="text-gray-900">
                    {new Date(
                      equipment.acquisitionDate
                    ).toLocaleDateString('es-CO')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MapPin className="size-5 text-[#ffd700]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Ubicación
                  </p>
                  <p className="text-gray-900">
                    {equipment.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance History */}
          <div className="border-t pt-6">
            <h3 className="text-[#1a5f3f] mb-4">
              Historial de Mantenimiento
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    Mantenimiento preventivo realizado
                  </p>
                  <p className="text-xs text-gray-500">
                    15 de Octubre, 2024
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    Inspección rutinaria
                  </p>
                  <p className="text-xs text-gray-500">
                    1 de Septiembre, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
