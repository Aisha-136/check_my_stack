import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Library, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Library, value: "50+", label: "Library Branches" },
    { icon: BookOpen, value: "500K+", label: "Books Available" },
    { icon: Users, value: "100K+", label: "Active Users" },
    { icon: Target, value: "95%", label: "Accuracy Rate" },
  ];

  const values = [
    {
      title: "Accessibility",
      description: "We believe everyone should have easy access to books and information, regardless of location.",
      icon: BookOpen,
    },
    {
      title: "Community",
      description: "Building a strong community of readers who support and inspire each other through shared knowledge.",
      icon: Users,
    },
    {
      title: "Innovation",
      description: "Leveraging technology to make library resources more discoverable and accessible to all.",
      icon: Target,
    },
    {
      title: "Service",
      description: "Dedicated to providing exceptional service that makes finding and accessing books effortless.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About LibraryFind
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LibraryFind is a revolutionary platform that connects readers with books across
            all local library branches. Our mission is to make finding and accessing books
            easier, faster, and more convenient than ever before.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                At LibraryFind, we're passionate about making library resources more accessible
                to everyone. We understand the frustration of making a trip to the library only
                to discover the book you're looking for isn't available at that branch. That's
                why we created a platform that lets you check availability across all branches
                before you leave home.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our goal is to empower readers with information, save time, and help libraries
                better serve their communities by increasing visibility of their collections.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle>{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team/Community Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Join Our Community</CardTitle>
              <CardDescription className="text-base">
                LibraryFind is more than just a search tool – it's a community of passionate readers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you're a student researching for a project, a parent looking for children's
                books, or an avid reader exploring new genres, LibraryFind helps you find what you
                need quickly and easily.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're constantly improving our platform based on user feedback. If you have suggestions
                or encounter any issues, please don't hesitate to{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                . Together, we can make library access better for everyone.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
