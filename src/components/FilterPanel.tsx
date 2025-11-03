import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterPanelProps {
  selectedStatus: string[];
  onStatusChange: (status: string[]) => void;
  availableCount: number;
  checkedOutCount: number;
  onHoldCount: number;
}

export const FilterPanel = ({
  selectedStatus,
  onStatusChange,
  availableCount,
  checkedOutCount,
  onHoldCount
}: FilterPanelProps) => {
  const statusOptions = [
    { value: 'available', label: 'Available', count: availableCount },
    { value: 'checked-out', label: 'Checked Out', count: checkedOutCount },
    { value: 'on-hold', label: 'On Hold', count: onHoldCount }
  ];

  const handleStatusToggle = (status: string) => {
    if (selectedStatus.includes(status)) {
      onStatusChange(selectedStatus.filter(s => s !== status));
    } else {
      onStatusChange([...selectedStatus, status]);
    }
  };

  const clearFilters = () => {
    onStatusChange([]);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filter Results</CardTitle>
          {selectedStatus.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium mb-3 text-sm text-foreground">Availability</h3>
          <div className="space-y-3">
            {statusOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={option.value}
                  checked={selectedStatus.includes(option.value)}
                  onCheckedChange={() => handleStatusToggle(option.value)}
                />
                <label
                  htmlFor={option.value}
                  className="text-sm text-foreground cursor-pointer flex-1 flex items-center justify-between"
                >
                  <span>{option.label}</span>
                  <span className="text-muted-foreground">({option.count})</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
