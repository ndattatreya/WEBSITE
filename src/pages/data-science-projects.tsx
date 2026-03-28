import PageWrapper from "../components/PageWrapper";

export default function DataSciencePage() {
  return (
    <PageWrapper
      title="Data Science Projects for Students | Final Year Project Ideas"
      description="Explore data science and analytics projects with real datasets, dashboards, and machine learning models."
    >
      <h1 className="text-3xl font-bold mb-4">Data Science Projects</h1>

      <p className="text-slate-600 mb-6">
        Data science projects help students build strong analytical skills. 
        We provide projects with real-world datasets and visualization dashboards.
      </p>

      <ul className="space-y-3 text-slate-600">
        <li>✔ Sales Prediction System</li>
        <li>✔ Stock Price Prediction</li>
        <li>✔ Customer Segmentation</li>
        <li>✔ Sentiment Analysis</li>
        <li>✔ Data Visualization Dashboard</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Pricing</h2>
      <p className="text-slate-600">
        Data science projects range from ₹5,000 to ₹20,000.
      </p>
    </PageWrapper>
  );
}