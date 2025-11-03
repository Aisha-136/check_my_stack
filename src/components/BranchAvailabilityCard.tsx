import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users } from "lucide-react";
import { BranchAvailability } from "@/data/mockData";
import { AvailabilityBadge } from "./AvailabilityBadge";

interface BranchAvailabilityCardProps {
  branch: BranchAvailability;
}

export const BranchAvailabilityCard = ({ branch }: BranchAvailabilityCardProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-foreground">{branch.branchName}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" />
              <span>{branch.address}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{branch.distance} away</p>
          </div>
          <AvailabilityBadge status={branch.status} />
        </div>

        <div className="space-y-2 pt-3 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Copies:</span>
            <span className="font-medium text-foreground">
              {branch.copiesAvailable} of {branch.copiesTotal} available
            </span>
          </div>

          {branch.status === 'checked-out' && branch.dueDate && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Next available: {branch.dueDate}</span>
            </div>
          )}

          {branch.status === 'on-hold' && branch.holdQueueLength && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{branch.holdQueueLength} people in hold queue</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
