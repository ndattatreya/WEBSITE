import { Helmet } from "react-helmet-async";

export default function PageWrapper({ title, description, children }) {
  return (
    <div className="pt-20">

      {/* ✅ SEO */}
      <Helmet>
        <title>{title} | IndiWebPros</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* 🔥 HEADER SECTION */}
      <div className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {title}
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* 🔥 PAGE CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {children}
        </div>
      </section>
    </div>
  );
}