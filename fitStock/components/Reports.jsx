import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { AddEquipmentDialog } from './AddEquipmentDialog';
import { EquipmentDetailsDialog } from './EquipmentDetailsDialog';

const initialEquipment = [
  {
    id: '001',
    name: 'Caminadora',
    category: 'Cardio',
    brand: 'TechnoGym',
    model: 'Run 700',
    serialNumber: 'TG-2023-001',
    acquisitionDate: '2023-01-15',
    status: 'Óptimo',
    location: 'Zona Cardio A',
  },
  {
    id: '002',
    name: 'Bicicleta Estática',
    category: 'Cardio',
    brand: 'Life Fitness',
    model: 'IC7',
    serialNumber: 'LF-2023-002',
    acquisitionDate: '2023-02-20',
    status: 'Óptimo',
    location: 'Zona Cardio B',
  },
  {
    id: '003',
    name: 'Banco de Pesas',
    category: 'Pesas',
    brand: 'Rogue',
    model: 'Adjustable Bench 3.0',
    serialNumber: 'RG-2023-003',
    acquisitionDate: '2023-03-10',
    status: 'Mantenimiento',
    location: 'Zona Pesas',
  },
  {
    id: '004',
    name: 'Elíptica',
    category: 'Cardio',
    brand: 'Matrix',
    model: 'E50',
    serialNumber: 'MX-2023-004',
    acquisitionDate: '2023-01-25',
    status: 'Fuera de Servicio',
    location: 'Zona Cardio A',
  },
  {
    id: '005',
    name: 'Máquina de Prensa',
    category: 'Máquinas',
    brand: 'Hammer Strength',
    model: 'Leg Press',
    serialNumber: 'HS-2023-005',
    acquisitionDate: '2023-04-05',
    status: 'Óptimo',
    location: 'Zona Máquinas',
  },
];

export function Reports({ onMenuClick }) {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const categories = ['Todas', 'Cardio', 'Pesas', 'Máquinas', 'Funcional'];

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todas' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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

  const handleAddEquipment = (newEquipment) => {
    const id = String(equipment.length + 1).padStart(3, '0');
    setEquipment([...equipment, { ...newEquipment, id }]);
  };

  const handleDeleteEquipment = (id) => {
    setEquipment(equipment.filter((item) => item.id !== id));
  };

  const handleViewDetails = (item) => {
    setSelectedEquipment(item);
    setIsDetailsOpen(true);
  };

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
          <h1 className="text-[#1a5f3f]">Gestión de Inventario</h1>
        </div>
        <p className="text-gray-600">Administra todos los equipos del gimnasio</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Buscar por nombre, marca o serial..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-[#1a5f3f] text-white gap-2"
          >
            <Plus className="size-4" />
            Agregar Equipo
          </Button>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-[#1a5f3f]'
                  : ''
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['ID', 'Equipo', 'Categoría', 'Marca/Modelo', 'Serial', 'Ubicación', 'Estado', 'Acciones'].map((h) => (
                <th key={h} className="px-6 py-4 text-left text-sm text-gray-600">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEquipment.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">#{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  <Badge variant="outline">{item.category}</Badge>
                </td>
                <td className="px-6 py-4">
                  <p>{item.brand}</p>
                  <p className="text-xs text-gray-500">{item.model}</p>
                </td>
                <td className="px-6 py-4">{item.serialNumber}</td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4">
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => handleViewDetails(item)}>
                    <Eye className="size-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Edit className="size-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDeleteEquipment(item.id)}>
                    <Trash2 className="size-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddEquipmentDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAdd={handleAddEquipment}
      />

      {selectedEquipment && (
        <EquipmentDetailsDialog
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
          equipment={selectedEquipment}
        />
      )}
    </div>
  );
}
 