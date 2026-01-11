import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          123 Library Street<br />
          Downtown District<br />
          City, State 12345
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: <a href="tel:+1234567890">(123) 456-7890</a>,
    },
    {
      icon: Mail,
      title: "Email",
      content: <a href="mailto:info@libraryfind.com">info@libraryfind.com</a>,
    },
    {
      icon: Clock,
      title: "Hours",
      content: (
        <>
          Monday - Friday: 9:00 AM - 8:00 PM<br />
          Saturday: 10:00 AM - 6:00 PM<br />
          Sunday: 12:00 PM - 5:00 PM
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a question, suggestion, or need help? We'd love to hear from you. Fill out the
            form below or reach out to us through any of the contact methods listed.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  You can also reach us through these methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries, please call us directly during business hours.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Phone className="h-5 w-5" />
                  (123) 456-7890
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How accurate is the availability information?
                  </h3>
                  <p className="text-muted-foreground">
                    We update our database in real-time from library systems. However, availability
                    can change quickly, so we recommend calling the branch before visiting if the
                    book shows limited availability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can I reserve books through LibraryFind?
                  </h3>
                  <p className="text-muted-foreground">
                    Currently, LibraryFind is a search and discovery tool. To reserve books, please
                    contact your local library branch directly or use their official reservation system.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Is LibraryFind free to use?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! LibraryFind is completely free to use. We're committed to making library
                    resources more accessible to everyone.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
