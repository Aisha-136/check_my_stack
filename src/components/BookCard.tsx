import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";
import { Book } from "@/data/mockData";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { useState } from "react";

interface BookCardProps {
  book: Book;
  availableAt?: number;
  totalBranches?: number;
  onViewDetails: (bookId: string) => void;
  onToggleWishlist?: (bookId: string) => void;
  isInWishlist?: boolean;
}

export const BookCard = ({ 
  book, 
  availableAt, 
  totalBranches, 
  onViewDetails,
  onToggleWishlist,
  isInWishlist = false
}: BookCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <CardContent className="p-0">
        <div className="flex gap-4 p-4">
          {/* Book Cover */}
          <div className="flex-shrink-0 w-24 h-36 rounded-md overflow-hidden bg-muted">
            {!imageError ? (
              <img
                src={book.coverUrl}
                alt={`Cover of ${book.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
                <span className="text-xs text-center px-2">No Cover</span>
              </div>
            )}
          </div>

          {/* Book Info */}
          <div className="flex-1 min-w-0" onClick={() => onViewDetails(book.id)}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground truncate">{book.author}</p>
              </div>
              {onToggleWishlist && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(book.id);
                  }}
                  aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-destructive text-destructive' : ''}`} />
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {book.genre.slice(0, 2).map((genre) => (
                <span key={genre} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {genre}
                </span>
              ))}
            </div>

            {availableAt !== undefined && totalBranches !== undefined && (
              <div className="flex items-center gap-3 text-sm">
                <AvailabilityBadge status={availableAt > 0 ? 'available' : 'checked-out'} />
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{availableAt} of {totalBranches} branches</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
