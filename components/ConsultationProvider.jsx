"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FloatingConsultButton } from "./FloatingConsultButton";
import { ConsultationDrawer } from "./ConsultationDrawer";

export const ConsultationProvider = () => {
  const [isConsultDrawerOpen, setIsConsultDrawerOpen] = useState(false);
  const pathname = usePathname();

  const handleConsultClick = () => {
    // If we're on the home page, scroll to the Free Consultation section
    if (pathname === "/") {
      const freeConsultSection = document.getElementById("free-consult");
      if (freeConsultSection) {
        freeConsultSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, open the drawer
      setIsConsultDrawerOpen(true);
    }
  };

  const handleCloseDrawer = () => {
    setIsConsultDrawerOpen(false);
  };

  return (
    <>
      <FloatingConsultButton onConsultClick={handleConsultClick} />
      <ConsultationDrawer isOpen={isConsultDrawerOpen} onClose={handleCloseDrawer} />
    </>
  );
};
