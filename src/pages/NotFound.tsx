import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-sm tracking-widest uppercase text-accent mb-4">Lost?</p>
        <h1 className="mb-4 text-5xl md:text-6xl font-serif text-foreground">404</h1>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          This page seems to have wandered off. Let's get you back to the café.
        </p>
        <a 
          href="/" 
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
