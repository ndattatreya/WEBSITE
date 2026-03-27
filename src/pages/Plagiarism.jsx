import PageWrapper from "../components/PageWrapper";

export default function PlagiarismPage() {
  return (
    <PageWrapper
      title="Plagiarism Removal Service"
      description="Reduce plagiarism and improve originality in assignments, projects, and research papers."
    >

      <p className="text-lg text-slate-600">
        IndiWebPros offers professional plagiarism removal services to help 
        students improve originality in their documents. We ensure your content 
        meets academic standards.
      </p>

      <h2 className="text-2xl font-bold">Our Services</h2>
      <ul className="text-slate-600">
        <li>✔ Plagiarism reduction</li>
        <li>✔ Content rewriting</li>
        <li>✔ Grammar improvement</li>
        <li>✔ Turnitin-ready reports</li>
      </ul>

      <h2 className="text-2xl font-bold">Pricing</h2>
      <ul className="text-slate-600">
        <li>Small documents: ₹300 – ₹800</li>
        <li>Medium: ₹800 – ₹2000</li>
        <li>Large thesis: ₹2000+</li>
      </ul>

      <h2 className="text-2xl font-bold">Why IndiWebPros?</h2>
      <ul className="text-slate-600">
        <li>✔ Fast delivery</li>
        <li>✔ Confidential work</li>
        <li>✔ High accuracy</li>
      </ul>

      <div className="bg-slate-900 text-white p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-10">Remove Plagiarism Now</h3>
        <a href="/contact" className="bg-amber-600 px-6 py-3 rounded-xl">
          Get Help
        </a>
      </div>

    </PageWrapper>
  );
}