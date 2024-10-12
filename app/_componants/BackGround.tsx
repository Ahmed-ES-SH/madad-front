"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // استخدم loadSlim لتحميل النسخة الأساسية

const AnimateBackGround = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // تحميل المكونات المطلوبة من tsparticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100vh",
        zIndex: "0",
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent", // خلفية شفافة
              },
            },
            fpsLimit: 120, // الحد الأقصى للإطارات
            interactivity: {
              events: {
                onClick: {
                  enable: false, // تعطيل التفاعل عند النقر
                },
                onHover: {
                  enable: false, // تعطيل التفاعل عند التحويم
                },
                resize: true, // تفعيل التفاعل مع تغيير حجم الشاشة
              },
            },
            particles: {
              color: {
                value: "#007baa", // لون الجسيمات
              },
              links: {
                color: "#007baa",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 0.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60, // عدد الجسيمات
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle", // تغيير شكل الجسيمات إلى دوائر
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default AnimateBackGround;
