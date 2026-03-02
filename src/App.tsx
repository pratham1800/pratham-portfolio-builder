import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GharSeva from "./pages/GharSeva";
import Zepto from "./pages/Zepto";
import NotFound from "./pages/NotFound";
import StickyNav from "./components/StickyNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StickyNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gharseva" element={<GharSeva />} />
          <Route path="/zepto" element={<Zepto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
