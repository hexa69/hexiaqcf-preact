import "@fontsource/rubik";
import "@/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/components/NavBar";

// pages
import Index from "@/pages/Index";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <div class="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
