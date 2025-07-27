import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Allit",
    url: "https://allit.com.bd/",
    description: "E-commerce platform"
  },
  {
    name: "Blucheez Fashion",
    url: "https://blucheez.fashion/",
    description: "Fashion retail website"
  },
  {
    name: "Buyaz",
    url: "https://buyaz.com.bd/",
    description: "Online marketplace"
  },
  {
    name: "Bagboyz",
    url: "https://www.bagboyzbagboyz.com/",
    description: "Bag retail platform"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            View Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of the successful projects we've delivered for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-custom transition-all duration-300 hover:scale-105 border bg-card"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground font-mono bg-muted/50 p-2 rounded">
                  {project.url}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;