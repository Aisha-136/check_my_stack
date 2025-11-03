import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";
import { mockBooks, getBookAvailability } from "@/data/mockData";
import { BranchAvailabilityCard } from "@/components/BranchAvailabilityCard";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('libraryWishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const book = mockBooks.find(b => b.id === id);
  
  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Book not found</h2>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const availability = getBookAvailability(book.id);
  const isInWishlist = wishlist.includes(book.id);

  const toggleWishlist = () => {
    const newWishlist = isInWishlist
      ? wishlist.filter(bookId => bookId !== book.id)
      : [...wishlist, book.id];
    
    setWishlist(newWishlist);
    localStorage.setItem('libraryWishlist', JSON.stringify(newWishlist));
    
    toast.success(
      isInWishlist 
        ? "Removed from wishlist" 
        : "Added to wishlist"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Details */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="text-2xl font-bold text-foreground mb-2">{book.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{book.author}</p>
                
                <Button 
                  className="w-full mb-4"
                  onClick={toggleWishlist}
                  variant={isInWishlist ? "outline" : "default"}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isInWishlist ? 'fill-current' : ''}`} />
                  {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">ISBN</span>
                    <span className="font-medium text-foreground">{book.isbn}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Published</span>
                    <span className="font-medium text-foreground">{book.publishYear}</span>
                  </div>
                  <div className="py-2">
                    <span className="text-muted-foreground block mb-2">Genres</span>
                    <div className="flex flex-wrap gap-2">
                      {book.genre.map((genre) => (
                        <span
                          key={genre}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability and Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">About this book</h2>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              </CardContent>
            </Card>

            {/* Branch Availability */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Availability by Branch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availability.map((branch) => (
                  <BranchAvailabilityCard key={branch.branchId} branch={branch} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
