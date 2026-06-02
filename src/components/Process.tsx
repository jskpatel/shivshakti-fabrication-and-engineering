"use client";

const processSteps = [
  {
    number: "01",
    title: "Planning",
    description:
      "Site assessment, feasibility analysis and project scoping with precision engineering.",
  },
  {
    number: "02",
    title: "Engineering",
    description:
      "Detailed engineering design, CAD modeling and structural analysis by expert teams.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Precision fabrication and assembly using advanced industrial manufacturing systems.",
  },
  {
    number: "04",
    title: "Quality Testing",
    description:
      "Rigorous QA/QC testing protocols ensuring compliance with international standards.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "On-site installation, commissioning and handover with full operational support.",
  },
];

const stats = [
  {
    value: "20+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "120+",
    label: "PROJECTS COMPLETED",
  },
  // {
  //   value: "500+",
  //   label: "SKILLED ENGINEERS",
  // },
  // {
  //   value: "28+",
  //   label: "COUNTRIES ACTIVE",
  // },
];

export default function Process() {
  return (
    <section
      id="process" className="w-full overflow-hidden pt-10">
      {/* Top Section */}
      <div className="bg-slate-950 text-white">
        <div className="mx-auto max-w-[1600px] px-6 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center">
            <p className="text-[#ff7a00] text-xs md:text-sm tracking-[6px] uppercase font-semibold">
              How We Work
            </p>

            <div className="mx-auto mt-4 h-[4px] w-20 bg-[#ff7a00]" />

            <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Our Industrial{" "}
              <span className="text-[#ff7a00]">Process</span>
            </h2>
          </div>

          {/* Desktop Timeline */}
          <div className="relative mt-20 hidden lg:block">
            <div className="absolute top-[34px] left-0 right-0 h-[2px] bg-[#ff7a00]" />

            <div className="grid grid-cols-5 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[3px] border-[#ff7a00] bg-[#03132E]">
                    <span className="text-[#ff7a00] text-3xl font-bold">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-3xl font-bold">{step.title}</h3>

                  <p className="mt-5 max-w-[270px] text-lg leading-9 text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="mt-16 lg:hidden">
            <div className="relative ml-5 border-l-2 border-[#ff7a00]">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative pl-10 ${
                    index !== processSteps.length - 1 ? "pb-12" : ""
                  }`}
                >
                  <div className="absolute -left-[22px] top-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ff7a00] bg-[#03132E] text-[#ff7a00] font-bold">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#ff6f00]">
        <div className="mx-auto max-w-[1600px] px-6 py-14 md:py-20">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center text-white">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
                  {item.value}
                </h3>

                <p className="mt-4 text-xs md:text-sm tracking-[6px] uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}