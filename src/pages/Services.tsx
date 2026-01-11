import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  MapPin,
  BookOpen,
  Heart,
  Clock,
  Users,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { mockBranches } from "@/data/mockData";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Search across all library branches simultaneously. Filter by availability, genre, author, and more to find exactly what you're looking for.",
    },
    {
      icon: MapPin,
      title: "Branch Locator",
      description:
        "Find the nearest library branch with the book you need. Check availability in real-time before you make the trip.",
    },
    {
      icon: BookOpen,
      title: "Book Availability",
      description:
        "See detailed availability information including number of copies, checkout status, and estimated return dates.",
    },
    {
      icon: Heart,
      title: "Wishlist Management",
      description:
        "Save books you want to read later. Keep track of your reading list and get notified when books become available.",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description:
        "Get up-to-date information about book availability across all branches, ensuring you always have the latest data.",
    },
    {
      icon: Users,
      title: "Community Features",
      description:
        "Join a community of readers. Share recommendations and discover new books based on your interests.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LibraryFind offers a comprehensive suite of tools designed to make your library
            experience seamless and enjoyable. Discover everything we have to offer.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Features & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Branch Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Library Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockBranches.map((branch) => (
              <Card key={branch.branchId}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">{branch.branchName}</CardTitle>
                      <CardDescription className="mt-1">{branch.distance}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{branch.address}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      (123) 456-7890
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How It Works</CardTitle>
              <CardDescription className="text-base">
                Getting started with LibraryFind is simple and straightforward
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Search for a Book</h3>
                    <p className="text-muted-foreground">
                      Enter the title, author, or ISBN in our search bar to find books across all
                      library branches.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Check Availability</h3>
                    <p className="text-muted-foreground">
                      View real-time availability information, including which branches have the
                      book and how many copies are available.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Save to Wishlist</h3>
                    <p className="text-muted-foreground">
                      Add books to your wishlist to track them later. Get notified when they
                      become available at your preferred branch.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit the Library</h3>
                    <p className="text-muted-foreground">
                      Head to the branch where your book is available, knowing it's ready for you
                      to check out.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="mt-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Have Questions?</CardTitle>
              <CardDescription className="text-base">
                We're here to help! Get in touch with our team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Mail className="h-5 w-5" />
                  Send us a message
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Phone className="h-5 w-5" />
                  Call us: (123) 456-7890
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
