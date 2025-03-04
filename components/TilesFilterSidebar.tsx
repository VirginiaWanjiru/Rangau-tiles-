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
  {
    id: "wall",
    label: "Wall",
    hasSubcategories: true,
    subcategories: [{ id: "25x40", label: "25 x 40" }],
  },
  {
    id: "floor",
    label: "Floor",
    hasSubcategories: true,
    subcategories: [
      { id: "30x30", label: "30 x 30" },
      { id: "40x40", label: "40 x 40" },
      { id: "50x50", label: "50 x 50" },
      { id: "60x60", label: "60 x 60" },
    ],
  },
];

export const TilesFilterSidebar = ({
  selectedFilters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose,
}: TilesFilterSidebarProps) => {
  // Check if any subcategory of a parent category is selected
    const isParentCategorySelected = (categoryId: string, subcategories: {id: string, label: string}[]) => {
      return subcategories.some(sub => selectedFilters.includes(sub.id));
    };
  
    // Handle parent category checkbox change
    const handleParentCategoryChange = (categoryId: string, subcategories: {id: string, label: string}[] | undefined) => {
      // First toggle the parent category itself
      onFilterChange(categoryId);
      
      // If it has subcategories, toggle them all to match the parent's new state
      if (subcategories && subcategories.length > 0) {
        const willBeSelected = !selectedFilters.includes(categoryId);
        
        subcategories.forEach(sub => {
          const isSubSelected = selectedFilters.includes(sub.id);
          
          // If parent will be selected and sub is not selected, select the sub
          // If parent will be unselected and sub is selected, unselect the sub
          if (willBeSelected !== isSubSelected) {
            onFilterChange(sub.id);
          }
        });
      }
    };
  
    return (
      <aside
        className={cn(
          "fixed inset-y-0 left-0 transform md:relative md:translate-x-0 z-40",
          "w-64 bg-white p-6",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between mt-4 mb-2">
            <div>
            <h2 className="text-xs font-medium text-gray-900">Filter By:</h2>
            </div>
            <div className="mb-1">
            {selectedFilters.length > 0 && (
              <button
                onClick={onClearFilters}
                className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Clear Filters
              </button>
            )}
            </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onClose}
          >
            <X className="h-4 w-4 mt-1" />
          </Button>
          </div>
        </div>
  
         {/* Selected filters display */}
         {selectedFilters.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filterId) => {
  
                const mainFilter = filters.find((f) => f.id === filterId);
                let filter: {id:string; label:string} | undefined = mainFilter;
  
                if(!filter){
  
                  for(const mainCategory of filters){
                    if(mainCategory.hasSubcategories){
                      const subFilter = mainCategory.subcategories?.find(
                        (sub) => sub.id === filterId
                      );
                      if (subFilter) {
                        filter = subFilter;
                        break;
                      }
                    }
                  }
                }
  
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
            <div key={filter.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={filter.id}
                  checked={selectedFilters.includes(filter.id)}
                  onCheckedChange={() => filter.hasSubcategories 
                    ? handleParentCategoryChange(filter.id, filter.subcategories) 
                    : onFilterChange(filter.id)
                  }
                  className="data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900"
                />
                <Label
                  htmlFor={filter.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {filter.label}
                  {filter.hasSubcategories &&
                    isParentCategorySelected(
                      filter.id,
                      filter.subcategories || []
                    ) && (
                      <span className="ml-2 text-xs text-orange-500">
                        (filtered)
                      </span>
                    )}
                </Label>
              </div>
  
              {/* Sub-filters for Faucets */}
              {filter.hasSubcategories && (
                <div className="pl-6 space-y-2">
                  {filter.subcategories?.map((subCategory) => (
                    <div key={subCategory.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={subCategory.id}
                        checked={selectedFilters.includes(subCategory.id)}
                        onCheckedChange={() => onFilterChange(subCategory.id)}
                        className="data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900"
                      />
                      <Label
                        htmlFor={subCategory.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {subCategory.label}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    );
  };