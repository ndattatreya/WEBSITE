import PageWrapper from "../components/PageWrapper";

export default function FinalYearPage() {
  return (
    <PageWrapper
      title="Final Year Project Help"
      description="Professional final year project assistance for BTech, MBA and degree students across India with complete development, documentation, and support."
    >

      {/* INTRO */}
      <p className="text-lg text-slate-600 leading-relaxed">
        IndiWebPros provides complete final year project help for students across India.
        Whether you are pursuing BTech, MBA, MCA, or any degree program, we help you successfully
        complete your academic project with high-quality implementation, proper documentation,
        and full guidance from start to finish.
      </p>

      <p className="text-slate-600 leading-relaxed">
        Final year projects are one of the most important parts of your academic journey.
        Many students struggle with selecting the right topic, implementing the project,
        or preparing reports and presentations. That’s where IndiWebPros comes in — we simplify
        the entire process and help you achieve better results with less stress.
      </p>

      {/* SERVICES */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Our Final Year Project Services
        </h2>

        <ul className="space-y-3">
          {[
            "Complete project development (code + explanation)",
            "Mini and major project assistance",
            "Project report writing (Word, PDF)",
            "PowerPoint presentation (PPT)",
            "Viva and interview preparation",
            "IEEE project implementation",
            "Custom project development based on your requirements"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="w-2 h-2 mt-2 bg-amber-600 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* DOMAINS */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Domains & Technologies We Cover
        </h2>

        <p className="text-slate-600 leading-relaxed">
          We provide final year projects across multiple domains including Computer Science,
          Artificial Intelligence, Machine Learning, Data Science, Web Development, and IoT.
          Our team works with technologies like Python, Java, MERN Stack, React, Node.js,
          TensorFlow, and more.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Popular Final Year Project Topics for Students
        </h2>

        <p className="text-slate-600 leading-relaxed mb-6">
          Choosing the right project topic is one of the biggest challenges for students.
          At IndiWebPros, we provide guidance and development support for trending and
          high-impact academic projects across multiple domains.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* AI & ML */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-amber-600">AI & Machine Learning Projects</h3>
            <ul className="space-y-2 text-slate-600">
              <li>✔ AI Chatbot for Student Assistance</li>
              <li>✔ Resume Screening System using ML</li>
              <li>✔ Fake News Detection using NLP</li>
              <li>✔ Face Recognition Attendance System</li>
              <li>✔ Movie Recommendation System</li>
              <li>✔ Credit Card Fraud Detection</li>
            </ul>
          </div>

          {/* Web Dev */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-amber-600">Web Development Projects</h3>
            <ul className="space-y-2 text-slate-600">
              <li>✔ E-commerce Website (MERN Stack)</li>
              <li>✔ Online Job Portal System</li>
              <li>✔ College Management System</li>
              <li>✔ Online Food Ordering System</li>
              <li>✔ Portfolio Website with Admin Panel</li>
              <li>✔ Blog Website with CMS</li>
            </ul>
          </div>

          {/* Data Science */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-amber-600">Data Science Projects</h3>
            <ul className="space-y-2 text-slate-600">
              <li>✔ Sales Prediction using Machine Learning</li>
              <li>✔ Stock Price Prediction System</li>
              <li>✔ Customer Segmentation Analysis</li>
              <li>✔ Covid-19 Data Analysis Dashboard</li>
              <li>✔ Sentiment Analysis on Social Media</li>
            </ul>
          </div>

          {/* IoT */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-amber-600">IoT Projects</h3>
            <ul className="space-y-2 text-slate-600">
              <li>✔ Smart Home Automation System</li>
              <li>✔ IoT-Based Smart Parking System</li>
              <li>✔ Smart Agriculture Monitoring System</li>
              <li>✔ Health Monitoring System using Sensors</li>
              <li>✔ Accident Detection & Alert System</li>
            </ul>
          </div>

        </div>
      </div>

      {/* PRICING */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Pricing & Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">Basic</h3>
            <p className="text-amber-600 font-bold text-xl mb-4">₹2,999 – ₹4,999</p>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>✔ Basic project</li>
              <li>✔ Source code</li>
              <li>✔ Basic documentation</li>
            </ul>
          </div>

          <div className="border p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">Standard</h3>
            <p className="text-amber-600 font-bold text-xl mb-4">₹5,000 – ₹9,999</p>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>✔ Full project development</li>
              <li>✔ Report + PPT</li>
              <li>✔ Explanation support</li>
            </ul>
          </div>

          <div className="border p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">Premium</h3>
            <p className="text-amber-600 font-bold text-xl mb-4">₹10,000+</p>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>✔ Advanced project (AI/ML)</li>
              <li>✔ Complete documentation</li>
              <li>✔ 1-on-1 support</li>
            </ul>
          </div>

        </div>
      </div>

      {/* SUPPORT */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Support & Guidance We Provide
        </h2>

        <p className="text-slate-600 leading-relaxed">
          At IndiWebPros, we don’t just deliver your project — we guide you throughout
          the entire process. Our support includes explaining the code, helping you prepare
          for viva, and ensuring you fully understand your project.
        </p>

        <ul className="mt-4 space-y-2 text-slate-600">
          <li>✔ One-on-one guidance</li>
          <li>✔ Doubt clarification sessions</li>
          <li>✔ WhatsApp / call support</li>
          <li>✔ Last-minute corrections</li>
        </ul>
      </div>

      {/* WHY CHOOSE */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Why Choose IndiWebPros?
        </h2>

        <ul className="space-y-3 text-slate-600">
          <li>✔ 100% plagiarism-free projects</li>
          <li>✔ Affordable pricing for students</li>
          <li>✔ On-time delivery guaranteed</li>
          <li>✔ Experienced developers & mentors</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">
          Get Your Final Year Project Done Without Stress
        </h3>
        <p className="text-slate-300 mb-6">
          Contact IndiWebPros today and get expert assistance for your final year project.
        </p>
        <a
          href="/contact"
          className="bg-amber-600 px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition"
        >
          Get Started Now
        </a>
      </div>

    </PageWrapper>
  );
}