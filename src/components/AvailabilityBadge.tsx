import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, XCircle } from "lucide-react";

interface AvailabilityBadgeProps {
  status: 'available' | 'checked-out' | 'on-hold';
  className?: string;
}

export const AvailabilityBadge = ({ status, className }: AvailabilityBadgeProps) => {
  const variants = {
    available: {
      variant: "default" as const,
      className: "bg-success hover:bg-success/90 text-success-foreground",
      icon: CheckCircle,
      label: "Available"
    },
    'checked-out': {
      variant: "default" as const,
      className: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
      icon: XCircle,
      label: "Checked Out"
    },
    'on-hold': {
      variant: "default" as const,
      className: "bg-warning hover:bg-warning/90 text-warning-foreground",
      icon: Clock,
      label: "On Hold"
    }
  };

  const config = variants[status];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className={`${config.className} ${className}`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.label}
    </Badge>
  );
};
