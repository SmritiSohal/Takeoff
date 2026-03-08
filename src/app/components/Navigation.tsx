import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

type NavigationProps = {
  title: string;
  showBackButton?: boolean;
};

export function Navigation({ title, showBackButton = true }: NavigationProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-6 px-8 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Link to="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
            )}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Home className="h-5 w-5" />
              <span className="font-bold text-lg">TakeOff</span>
            </Link>
          </div>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
