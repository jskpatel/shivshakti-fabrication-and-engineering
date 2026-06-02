"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  FaIndustry,
  FaTools,
  FaHardHat,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry />,
    title: "Industrial Manufacturing",
    description: "Large-scale industrial manufacturing and precision engineering solutions built to global standards."
  },
  {
    icon: <FaTools />,
    title: "Quality & Safety",
    description: "Rigorous quality assurance protocols and safety management systems meeting international standards."
  },
  {
    icon: <FaHardHat />,
    title: "Engineering R&D",
    description: "Advanced research and development driving next-generation industrial technologies and innovations."
  },
  {
    icon: <FaHardHat />,
    title: "Material Handling",
    description: "Conveyor systems, stackers, reclaimers and ship loaders for bulk commodities like coal, iron ore and copper."
  },
  {
    icon: <FaHardHat />,
    title: "Maintenance & Rebuilds",
    description: "Component rebuild programs, on‑site machining, and fleet maintenance contracts to reduce downtime."
  },
  {
    icon: <FaHardHat />,
    title: "Underground Support",
    description: "Ground control, ventilation systems, rock bolting rigs and refuge chambers for safe underground operations."
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-slate-950"
    >
      <div className="container-width">
        <SectionTitle
          title="Our"
          highlight="Services"
          subtitle="What We Do"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:-translate-y-3 transition duration-300"
            >
              <div className="text-5xl text-orange-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}