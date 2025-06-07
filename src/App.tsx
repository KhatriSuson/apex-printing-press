import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Digitalprint from "./pages/footer/Digitalprint";
import Bookbinding from "./pages/footer/Bookbinding";
import AboutUs from "./pages/navbar/Aboutus";
import Servicenav from "./pages/navbar/Servicenav";
import Binding from "./pages/navbar/Bindingnav";
import Portfolionav from "./pages/navbar/Portfolionav";
import Contactnav from "./pages/navbar/Contactnav";
import TeamSection from "./pages/navbar/Teamnav";

// Create a new QueryClient with cache disabled
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  },
});

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Servicenav />} />
          <Route path="/binding" element={<Binding />} />
          <Route path="/portfolio" element={<Portfolionav />} />
          <Route path="/contact" element={<Contactnav />} />
          <Route path="teams" element={<TeamSection />} />
          <Route path="/digital-print" element={<Digitalprint />} />
          <Route path="/book-binding" element={<Bookbinding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
