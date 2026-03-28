import PageWrapper from "../components/PageWrapper";

export default function WebProjectsPage() {
  return (
    <PageWrapper
      title="Web Development Projects for Students | MERN Stack Projects"
      description="Get full-stack web development projects using React, Node.js, and MongoDB for final year students with complete support."
    >
      <h1 className="text-3xl font-bold mb-4">Web Development Projects</h1>

      <p className="text-slate-600 mb-6">
        Web development projects are highly popular among students. 
        We build scalable and real-world applications using MERN stack and modern technologies.
      </p>

      <ul className="space-y-3 text-slate-600">
        <li>✔ E-commerce Website</li>
        <li>✔ Online Job Portal</li>
        <li>✔ College Management System</li>
        <li>✔ Online Food Ordering System</li>
        <li>✔ Blogging Platform with Admin Panel</li>
        <li>✔ Portfolio Website with CMS</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Pricing</h2>
      <p className="text-slate-600">
        Web projects start from ₹3,000 to ₹15,000 depending on features.
      </p>
    </PageWrapper>
  );
}