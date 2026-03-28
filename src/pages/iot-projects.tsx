import PageWrapper from "../components/PageWrapper";

export default function IoTProjectsPage() {
  return (
    <PageWrapper
      title="IoT Projects for Students | Final Year Embedded Projects"
      description="Get IoT-based final year projects with hardware integration, sensors, and real-time monitoring systems."
    >
      <h1 className="text-3xl font-bold mb-4">IoT Projects</h1>

      <p className="text-slate-600 mb-6">
        IoT projects combine hardware and software to build smart systems. 
        We provide complete guidance including circuit design and coding.
      </p>

      <ul className="space-y-3 text-slate-600">
        <li>✔ Smart Home Automation</li>
        <li>✔ Smart Parking System</li>
        <li>✔ Agriculture Monitoring System</li>
        <li>✔ Health Monitoring System</li>
        <li>✔ Accident Detection System</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Pricing</h2>
      <p className="text-slate-600">
        IoT projects start from ₹6,000 to ₹18,000.
      </p>
    </PageWrapper>
  );
}