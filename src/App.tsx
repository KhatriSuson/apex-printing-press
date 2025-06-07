import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Servicenav />} />
          <Route path="/binding" element={<Binding />} />
          <Route path="/portfolio" element={<Portfolionav />} />
          <Route path="/contact" element={<Contactnav />} />
          {/* ADD ALL CUSTOM ROUTES BELOW THE CATCH-ALL "*" ROUTE */}
          <Route path="teams" element={<TeamSection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/digital-print" element={<Digitalprint />} />
          <Route path="/book-binding" element={<Bookbinding />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
