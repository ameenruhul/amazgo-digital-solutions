import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Truck, 
  Building, 
  Scale, 
  Heart, 
  GraduationCap, 
  DollarSign, 
  MapPin 
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-commerce & Retail", color: "text-blue-500" },
  { icon: Truck, name: "Logistics & Supply Chain", color: "text-green-500" },
  { icon: Building, name: "Real Estate & Property", color: "text-purple-500" },
  { icon: Scale, name: "Legal & Professional Services", color: "text-amber-500" },
  { icon: Heart, name: "Healthcare & Wellness", color: "text-red-500" },
  { icon: GraduationCap, name: "Education & E-learning", color: "text-indigo-500" },
  { icon: DollarSign, name: "Finance & Accounting", color: "text-emerald-500" },
  { icon: MapPin, name: "Travel & Tourism", color: "text-orange-500" }
];

const Industries = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-custom transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-glow">
                  <industry.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Don't see your industry? We adapt our expertise to serve businesses across all sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;