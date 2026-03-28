import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function AIProjectsPage() {
  return (
    <PageWrapper
      title="AI Projects for Students | Final Year AI Project Ideas"
      description="Explore the best AI projects for students including machine learning, NLP, and deep learning with full support and documentation."
    >
      <h1 className="text-3xl font-bold mb-6">
        AI Projects for Students (Final Year & Mini Projects)
      </h1>

      <p className="text-slate-600 mb-6">
        AI projects for students are one of the most in-demand academic project categories today. 
        With the rise of machine learning, deep learning, and automation, students are expected to 
        build real-world intelligent systems for their final year projects.
      </p>

      <p className="text-slate-600 mb-6">
        At IndiWebPros, we help students develop high-quality AI projects with complete guidance, 
        documentation, and deployment support. Whether you are a beginner or an advanced learner, 
        we provide tailored solutions based on your requirements.
      </p>

      {/* 🔥 SECTION 1 */}
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Why Choose AI Projects for Final Year?
      </h2>

      <p className="text-slate-600 mb-6">
        AI projects for students are highly valued because they demonstrate problem-solving ability, 
        technical expertise, and innovation. These projects are also useful for placements, internships, 
        and higher studies.
      </p>

      <ul className="space-y-2 text-slate-600 mb-6">
        <li>✔ High demand in job market</li>
        <li>✔ Strong portfolio projects</li>
        <li>✔ Real-world applications</li>
        <li>✔ Good for research papers</li>
      </ul>

      {/* 🔥 SECTION 2 */}
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Best AI Project Ideas for Students
      </h2>

      <ul className="space-y-3 text-slate-600 mb-6">
        <li>✔ AI Chatbot for Student Assistance</li>
        <li>✔ Resume Screening System using Machine Learning</li>
        <li>✔ Fake News Detection using NLP</li>
        <li>✔ Face Recognition Attendance System</li>
        <li>✔ Emotion Detection System</li>
        <li>✔ Voice Assistant using AI</li>
        <li>✔ Recommendation System (Movies / Products)</li>
      </ul>

      {/* 🔥 SECTION 3 */}
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Technologies Used in AI Projects
      </h2>

      <p className="text-slate-600 mb-6">
        Our AI projects for students use modern technologies and frameworks to ensure industry-level 
        implementation and scalability.
      </p>

      <ul className="space-y-2 text-slate-600 mb-6">
        <li>✔ Python, TensorFlow, PyTorch</li>
        <li>✔ Scikit-learn, Pandas, NumPy</li>
        <li>✔ NLP libraries (NLTK, spaCy)</li>
        <li>✔ React for frontend interfaces</li>
      </ul>

      {/* 🔥 SECTION 4 */}
      <h2 className="text-2xl font-bold mt-8 mb-4">
        AI Project Development Support
      </h2>

      <p className="text-slate-600 mb-6">
        We provide complete support for AI projects including topic selection, coding, testing, 
        documentation, and final presentation preparation.
      </p>

      <ul className="space-y-2 text-slate-600 mb-6">
        <li>✔ Full source code</li>
        <li>✔ Project report (IEEE format)</li>
        <li>✔ PPT preparation</li>
        <li>✔ Viva support</li>
        <li>✔ Plagiarism-free documentation</li>
      </ul>

      {/* 🔥 SECTION 5 */}
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Pricing for AI Projects
      </h2>

      <p className="text-slate-600 mb-6">
        AI projects for students typically range between ₹8,000 to ₹25,000 depending on complexity, 
        dataset size, and features required.
      </p>

      {/* 🔥 CTA */}
      <div className="bg-slate-100 p-6 rounded-xl mt-10">
        <h3 className="font-bold text-lg mb-2">Need Help with AI Projects?</h3>
        <p className="text-slate-600 mb-4">
          Get complete support for your final year AI project with expert guidance.
        </p>
        <Link to="/contact" className="bg-amber-600 text-white px-6 py-3 rounded">
          Get Project Help
        </Link>
      </div>
    </PageWrapper>
  );
}