import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SearchBar } from "@/components/SearchBar";
import { BookCard } from "@/components/BookCard";
import { FilterPanel } from "@/components/FilterPanel";
import { BookOpen } from "lucide-react";
import { mockBooks, getBookAvailability } from "@/data/mockData";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('libraryWishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredBooks = mockBooks.filter(book => {
    const matchesSearch = !searchQuery || 
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery) ||
      book.isbn.includes(searchQuery);

    if (!matchesSearch) return false;

    if (selectedStatus.length === 0) return true;

    const availability = getBookAvailability(book.id);
    const hasMatchingStatus = availability.some(branch => 
      selectedStatus.includes(branch.status)
    );

    return hasMatchingStatus;
  });

  const getAvailabilityStats = () => {
    const stats = { available: 0, 'checked-out': 0, 'on-hold': 0 };
    mockBooks.forEach(book => {
      const availability = getBookAvailability(book.id);
      availability.forEach(branch => {
        stats[branch.status]++;
      });
    });
    return stats;
  };

  const stats = getAvailabilityStats();

  const toggleWishlist = (bookId: string) => {
    const newWishlist = wishlist.includes(bookId)
      ? wishlist.filter(id => id !== bookId)
      : [...wishlist, bookId];
    
    setWishlist(newWishlist);
    localStorage.setItem('libraryWishlist', JSON.stringify(newWishlist));
    
    toast.success(
      wishlist.includes(bookId) 
        ? "Removed from wishlist" 
        : "Added to wishlist"
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Search Section */}
      <section className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {searchQuery === "" ? (
          // Welcome State
          <div className="max-w-2xl mx-auto text-center py-16">
            <BookOpen className="h-24 w-24 mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Your Next Book
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Search our collection and check availability across all local library branches.
              Never waste a trip again!
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-card border">
                <p className="text-3xl font-bold text-success">{stats.available}</p>
                <p className="text-sm text-muted-foreground mt-1">Available</p>
              </div>
              <div className="p-4 rounded-lg bg-card border">
                <p className="text-3xl font-bold text-warning">{stats['on-hold']}</p>
                <p className="text-sm text-muted-foreground mt-1">On Hold</p>
              </div>
              <div className="p-4 rounded-lg bg-card border">
                <p className="text-3xl font-bold text-destructive">{stats['checked-out']}</p>
                <p className="text-sm text-muted-foreground mt-1">Checked Out</p>
              </div>
            </div>
          </div>
        ) : (
          // Search Results
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <FilterPanel
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
                availableCount={stats.available}
                checkedOutCount={stats['checked-out']}
                onHoldCount={stats['on-hold']}
              />
            </aside>

            {/* Results */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredBooks.length} {filteredBooks.length === 1 ? 'result' : 'results'} found
                </h2>
              </div>

              {filteredBooks.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-2">No books found</p>
                  <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBooks.map((book) => {
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
                        isInWishlist={wishlist.includes(book.id)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
