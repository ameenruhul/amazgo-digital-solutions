import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's Create Something Great Together
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Whether you're looking to build a new app, revamp your website, or automate your business processes — AmazGo Bangladesh is your trusted technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: "Phone",
              content: "+8801750-087002",
              href: "tel:+8801750087002"
            },
            {
              icon: Mail,
              title: "Email",
              content: "amazgobd040997@gmail.com",
              href: "mailto:amazgobd040997@gmail.com"
            },
            {
              icon: Globe,
              title: "Website", 
              content: "www.amazgobd.com",
              href: "https://www.amazgobd.com"
            },
            {
              icon: MapPin,
              title: "Location",
              content: "Serving Clients Globally from Bangladesh",
              href: "#"
            }
          ].map((contact, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-0 bg-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-glow">
                  <contact.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  {contact.title}
                </h3>
                <a 
                  href={contact.href}
                  className="text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm leading-relaxed block"
                >
                  {contact.content}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-primary p-8 rounded-2xl shadow-glow">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Your Vision. Our Innovation.
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Let's build the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;