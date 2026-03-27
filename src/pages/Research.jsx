import PageWrapper from "../components/PageWrapper";

export default function ResearchPage() {
  return (
    <PageWrapper
      title="Research Paper Writing Service"
      description="Professional research paper writing, editing, and publication support for students and researchers."
    >

      <p className="text-lg text-slate-600">
        IndiWebPros provides high-quality research paper writing services for 
        students, researchers, and professionals. We help you create well-structured, 
        plagiarism-free research papers ready for journals and conferences.
      </p>

      <h2 className="text-2xl font-bold">Our Services</h2>
      <ul className="text-slate-600">
        <li>✔ Topic selection</li>
        <li>✔ Literature review</li>
        <li>✔ Paper writing</li>
        <li>✔ Citation & formatting (IEEE, APA)</li>
      </ul>

      <h2 className="text-2xl font-bold">Why Choose Us?</h2>
      <p className="text-slate-600">
        We ensure originality, proper formatting, and academic quality that meets 
        publication standards.
      </p>

      <h2 className="text-2xl font-bold">Pricing</h2>
      <ul className="text-slate-600">
        <li>Basic Paper: ₹1000 – ₹3000</li>
        <li>Standard: ₹3000 – ₹7000</li>
        <li>Premium: ₹8000+</li>
      </ul>

      <h2 className="text-2xl font-bold">Support</h2>
      <ul className="text-slate-600">
        <li>✔ Revisions</li>
        <li>✔ Publication guidance</li>
        <li>✔ Plagiarism check</li>
      </ul>

      <div className="bg-slate-900 text-white p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-10">Publish Your Research</h3>
        <a href="/contact" className="bg-amber-600 px-6 py-3 rounded-xl">
          Get Started
        </a>
      </div>

    </PageWrapper>
  );
}