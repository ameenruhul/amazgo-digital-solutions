import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Cloud, 
  Workflow, 
  Building2, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Scalable, high-performance software tailored to your unique business needs. From ERP systems to custom CRM tools.",
    features: ["Enterprise Solutions", "Custom CRM", "ERP Systems", "API Development"]
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Modern, responsive websites and mobile applications built with React.js, Node.js, Flutter, and Django.",
    features: ["React.js", "Node.js", "Flutter", "Django"]
  },
  {
    icon: ShoppingCart,
    title: "eCommerce & Marketplace Solutions",
    description: "Custom eCommerce platforms and marketplace development to help brands sell smarter online.",
    features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Integration"]
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description: "User experience focused designs that are visually striking, user-friendly, and conversion-focused.",
    features: ["User Research", "Prototyping", "Visual Design", "User Testing"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description: "Cloud migration, performance optimization, and infrastructure maintenance with DevOps best practices.",
    features: ["AWS", "Azure", "Google Cloud", "DevOps"]
  },
  {
    icon: Workflow,
    title: "API Integration & Automation",
    description: "Streamline operations with powerful third-party integrations and business process automations.",
    features: ["Third-party APIs", "Automation", "Integration", "Workflow"]
  },
  {
    icon: Building2,
    title: "SaaS Product Development",
    description: "Build scalable SaaS platforms from scratch - from planning and UI/UX to deployment and monetization.",
    features: ["Product Planning", "Scalable Architecture", "Monetization", "Deployment"]
  },
  {
    icon: Wrench,
    title: "Maintenance & Technical Support",
    description: "Long-term support for system health, updates, security patches, and performance optimization.",
    features: ["24/7 Support", "Security Updates", "Performance", "Monitoring"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-custom transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;