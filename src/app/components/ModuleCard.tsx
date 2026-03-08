import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router";

type ModuleCardProps = {
  title: string;
  description: string;
  ctaText: string;
  href?: string;
  onClick?: () => void;
};

export function ModuleCard({ title, description, ctaText, href, onClick }: ModuleCardProps) {
  const content = (
    <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full group">
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link to={href} className="block h-full">{content}</Link>;
  }

  return <div onClick={onClick}>{content}</div>;
}
