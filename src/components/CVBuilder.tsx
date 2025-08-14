import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { motion } from "framer-motion";

type CVData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
};

const initialCV: CVData = {
  name: "",
  title: "",
  email: "",
  phone: "",
  summary: "",
  experience: "",
  education: "",
  skills: "",
};

const CVBuilder = () => {
  const [cv, setCV] = useState<CVData>(initialCV);
  const printRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCV({ ...cv, [e.target.name]: e.target.value });
  };

  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current,
  //   documentTitle: `${cv.name || "CV"}-Resume`,
  // });

  return (
    <motion.div
      className="max-w-5xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-gradient">CV Builder</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form className="space-y-4">
          <input
            className="w-full border rounded-lg p-2"
            name="name"
            placeholder="Full Name"
            value={cv.name}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded-lg p-2"
            name="title"
            placeholder="Professional Title"
            value={cv.title}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded-lg p-2"
            name="email"
            placeholder="Email"
            value={cv.email}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded-lg p-2"
            name="phone"
            placeholder="Phone"
            value={cv.phone}
            onChange={handleChange}
          />
          <textarea
            className="w-full border rounded-lg p-2"
            name="summary"
            placeholder="Professional Summary"
            rows={2}
            value={cv.summary}
            onChange={handleChange}
          />
          <textarea
            className="w-full border rounded-lg p-2"
            name="experience"
            placeholder="Experience (e.g. Company, Role, Dates, Description)"
            rows={3}
            value={cv.experience}
            onChange={handleChange}
          />
          <textarea
            className="w-full border rounded-lg p-2"
            name="education"
            placeholder="Education (e.g. Degree, School, Dates)"
            rows={2}
            value={cv.education}
            onChange={handleChange}
          />
          <textarea
            className="w-full border rounded-lg p-2"
            name="skills"
            placeholder="Skills (comma separated)"
            rows={2}
            value={cv.skills}
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn-hero w-full mt-2"
            // onClick={handlePrint}
          >
            Export as PDF
          </button>
        </form>
        {/* Live Preview */}
        <div ref={printRef} className="bg-white rounded-xl shadow-soft p-6 border border-border min-h-[600px]">
          <h2 className="text-2xl font-bold text-primary">{cv.name || "Your Name"}</h2>
          <p className="text-lg text-secondary mb-2">{cv.title || "Your Title"}</p>
          <div className="flex gap-4 text-sm text-gray-500 mb-4">
            <span>{cv.email || "email@example.com"}</span>
            <span>{cv.phone || "+123456789"}</span>
          </div>
          <hr className="my-2" />
          <section className="mb-2">
            <h3 className="font-semibold text-accent">Summary</h3>
            <p>{cv.summary || "A short professional summary goes here."}</p>
          </section>
          <section className="mb-2">
            <h3 className="font-semibold text-accent">Experience</h3>
            <p>{cv.experience || "List your work experience here."}</p>
          </section>
          <section className="mb-2">
            <h3 className="font-semibold text-accent">Education</h3>
            <p>{cv.education || "List your education here."}</p>
          </section>
          <section>
            <h3 className="font-semibold text-accent">Skills</h3>
            <p>{cv.skills || "e.g. JavaScript, React, Node.js"}</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default CVBuilder;