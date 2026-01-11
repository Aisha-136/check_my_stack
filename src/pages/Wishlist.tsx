import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { ArrowLeft, BookOpen } from "lucide-react";
import { mockBooks, getBookAvailability } from "@/data/mockData";
import { toast } from "sonner";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('libraryWishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const wishlistBooks = mockBooks.filter(book => wishlist.includes(book.id));

  const toggleWishlist = (bookId: string) => {
    const newWishlist = wishlist.filter(id => id !== bookId);
    setWishlist(newWishlist);
    localStorage.setItem('libraryWishlist', JSON.stringify(newWishlist));
    toast.success("Removed from wishlist");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Search
        </Button>
        <h1 className="text-3xl font-bold text-foreground mb-8">My Wishlist</h1>
        {wishlistBooks.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Start adding books you want to read!
            </p>
            <Button onClick={() => navigate('/')}>
              Browse Books
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              {wishlistBooks.length} {wishlistBooks.length === 1 ? 'book' : 'books'} saved
            </p>
            {wishlistBooks.map((book) => {
              const availability = getBookAvailability(book.id);
              const availableAt = availability.filter(b => b.status === 'available').length;
              
              return (
                <BookCard
                  key={book.id}
                  book={book}
                  availableAt={availableAt}
                  totalBranches={availability.length}
                  onViewDetails={(id) => navigate(`/book/${id}`)}
                  onToggleWishlist={toggleWishlist}
                  isInWishlist={true}
                />
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
