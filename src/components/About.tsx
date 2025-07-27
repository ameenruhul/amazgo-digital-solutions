import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Who We Are */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AmazGo Bangladesh is a Bangladeshi-born technology company with a global mindset. Founded with a vision to revolutionize digital services in South Asia and beyond, we combine innovation, strategy, and technology to build meaningful digital products.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over the years, we've served clients across the USA, UK, Canada, and the Middle East with unmatched dedication and performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to launch a new digital product, automate your business process, or scale your operations online — we are the team that delivers excellence.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow">
                <div className="text-center text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold mb-2">🇺🇸</div>
                      <div className="text-sm">USA</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">🇬🇧</div>
                      <div className="text-sm">UK</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">🇨🇦</div>
                      <div className="text-sm">Canada</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">🇦🇪</div>
                      <div className="text-sm">Middle East</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="group hover:shadow-card-custom transition-all duration-300 border-0 bg-gradient-card">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses and entrepreneurs through innovative, secure, and scalable digital solutions that drive impact, efficiency, and sustainable growth.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card-custom transition-all duration-300 border-0 bg-gradient-card">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized software and digital solutions company known for integrity, innovation, and delivering value-driven results — making technology accessible and impactful for businesses of all sizes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose AmazGo Bangladesh?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Experienced & Skilled Team",
              description: "Years of experience in delivering top-tier digital solutions"
            },
            {
              title: "Client-Centric Approach", 
              description: "Your goals are our blueprint. We work closely with clients to meet objectives"
            },
            {
              title: "Agile & Transparent Process",
              description: "We follow agile development and maintain open communication"
            },
            {
              title: "Affordable, Scalable Solutions",
              description: "Quality doesn't have to break the bank. Smart solutions within budget"
            },
            {
              title: "Global Standards",
              description: "We operate globally but understand local and international business needs"
            },
            {
              title: "24/7 Support",
              description: "Continuous support to ensure your business runs smoothly around the clock"
            }
          ].map((item, index) => (
            <Card key={index} className="group hover:shadow-card-custom transition-all duration-300 border-0 bg-gradient-card hover:scale-105">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;