
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <div className="w-20 h-1 bg-primary my-6 rounded"></div>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="gap-2">
          <a href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
