
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface TilesFilterSidebarProps {
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const filters = [
  { id: 'porcelain', label: 'Porcelain' },
  { id: 'ceramic', label: 'Ceramic' },
  { id: 'mosaic', label: 'Mosaic' },
  { id: 'stone', label: 'Natural Stone' },
  { id: 'marble', label: 'Marble' },
  { id: 'wood', label: 'Wood Effect' },
  { id: 'metallic', label: 'Metallic' },
  { id: 'decorative', label: 'Decorative' },
];

export const TilesFilterSidebar = ({
  selectedFilters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose
}: TilesFilterSidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 transform md:relative md:translate-x-0 z-40",
        "w-64 bg-white border-r border-gray-200 p-6",
        "transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-medium text-gray-900">Tile Types</h2>
          {selectedFilters.length > 0 && (
            <button
              onClick={onClearFilters}
              className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Selected filters display */}
      {selectedFilters.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map(filterId => {
              const filter = filters.find(f => f.id === filterId);
              return (
                <button
                  key={filterId}
                  onClick={() => onFilterChange(filterId)}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors group"
                >
                  {filter?.label}
                  <X className="h-3 w-3 text-gray-500 group-hover:text-gray-700" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Separator line */}
      <div className="h-px bg-gray-200 my-4" />

      {/* Filter checklist */}
      <div className="space-y-4">
        {filters.map((filter) => (
          <div key={filter.id} className="flex items-center space-x-2">
            <Checkbox
              id={filter.id}
              checked={selectedFilters.includes(filter.id)}
              onCheckedChange={() => onFilterChange(filter.id)}
              className="data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900"
            />
            <Label
              htmlFor={filter.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {filter.label}
            </Label>
          </div>
        ))}
      </div>
    </aside>
  );
};
