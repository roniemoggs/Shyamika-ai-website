"use client";

import React from "react";
import { Code, Layout, Bot } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  features: string[];
  iconType: "code" | "layout" | "bot";
}

const iconMap = {
  code: <Code className="w-6 h-6 text-white" />,
  layout: <Layout className="w-6 h-6 text-white" />,
  bot: <Bot className="w-6 h-6 text-white" />,
};

export const ServiceGlassCard: React.FC<{ service: ServiceItem; index: number }> = ({
  service,
  index,
}) => {
  return (
    <div
      className="min-h-[560px] rounded-3xl p-8 flex flex-col group relative overflow-hidden transition-all duration-1000 ease-out hover:scale-[1.02] bg-white/5 backdrop-blur-md shadow-lg slide-up-card translate-y-32"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Gradient Border Highlight */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          padding: "1px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
      />

      {/* Hover Aura Effect */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `
            inset 0 0 0 1px rgba(255, 255, 255, 0.5),
            inset 0 0 24px rgba(56, 189, 248, 0.9)
          `
        }}
      />

      <div className="relative z-10 flex flex-col h-full space-y-12">
        <div className="flex justify-between items-start">
          <div className="p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md">
            {iconMap[service.iconType]}
          </div>
          <span className="font-mono text-sm text-mute tracking-widest">{service.id}</span>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-sans font-extralight text-white mb-6">
            {service.title}
          </h3>
          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start text-base text-slate-300/80 font-thin">
                <span className="text-sky-400 mr-3 mt-1 text-lg font-normal">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
