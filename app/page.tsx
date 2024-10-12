import { Metadata } from "next";
import React from "react";
import Navbar from "./_componants/_webiste/Navbar";
import Hero_section from "./_componants/_webiste/Hero_section";

export const metadata: Metadata = {
  title: "مدد | الرئيسية ",
  description:
    "شركة مدد للدعاية والاعلان والتخصص فى الخدمات الافتراضية مثل - (بناء التطبيقات - بناء المواقع الالكترونية - تنيظم حملات التسويق - مراجعة الخطط التسويقية وتطويرها - بناء خطط تسويقية تناسب السوق المستهدف - بناء إحصائيات تخص النظام الاقتصادى للسوق المستهدف )",
};

export default function Home() {
  return (
    <div className="md:h-screen h-fit lg:overflow-hidden relative dark:bg-main_dash dark:text-secend_text">
      <Navbar />
      <Hero_section />
    </div>
  );
}
