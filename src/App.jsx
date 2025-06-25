import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import TaskManager from "@/components/TaskManager";
import APIData from "@/components/api-data";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Define routes for your components */}
            <Route path="/" element={<TaskManager />} />
            <Route path="/api-data" element={<APIData />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}