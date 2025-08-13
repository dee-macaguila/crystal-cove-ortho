export const metadata = {
  title: "Meet the Doctor | Dr. Russell Choy Orthodontics",
  description: "Learn about Dr. Russell Choy, his education, experience, and commitment to orthodontic excellence.",
};

export default function MeetTheDoctorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 tracking-tight mb-4">
            Meet the Doctor
          </h1>
          <p className="text-xl text-slate-700 font-medium">
            Your Orland Park Orthodontist
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Doctor Image */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl text-blue-800">👨‍⚕️</span>
                  </div>
                  <p className="text-sm text-slate-600">Dr. Russell Choy</p>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Dr. Russell Choy</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Dr. Choy has enjoyed a long and rewarding career in Orthodontistry. He first worked as a licensed orthodontic hygienist. 
                  From there he attended Southern Illinois University where he obtained the Degree of Doctor of Dental Medicine (D.M.D). 
                  He then completed two additional years of specialty training in orthodontics at St. Louis University where he obtained 
                  his Masters of Science Degree (M.S.).
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  Dr. Choy also specializes in Invisalign Clear Braces, and is an Invisalign preferred provider. He offers a free initial 
                  consultation and exam for patients interested in learning about Invisalign Braces.
                </p>
              </div>

              {/* Education */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Education & Training</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Licensed Orthodontic Hygienist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Doctor of Dental Medicine (D.M.D) - Southern Illinois University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Masters of Science Degree (M.S.) in Orthodontics - St. Louis University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Invisalign Preferred Provider</span>
                  </li>
                </ul>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Traditional Braces</h4>
                    <p className="text-sm text-slate-600">Metal and ceramic braces for all ages</p>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Clear Aligners</h4>
                    <p className="text-sm text-slate-600">Invisalign and other clear aligner systems</p>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Early Treatment</h4>
                    <p className="text-sm text-slate-600">Interceptive orthodontics for children</p>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Adult Treatment</h4>
                    <p className="text-sm text-slate-600">Specialized care for adult patients</p>
                  </div>
                </div>
              </div>

              {/* Professional Memberships */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Professional Memberships</h3>
                <p className="text-slate-700 mb-4">
                  He is currently a proud member in good standing with the following:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• The ADA (American Dental Association)</li>
                  <li>• The AAO (American Association of Orthodontists)</li>
                  <li>• The CDS (Chicago Dental Society)</li>
                  <li>• The ISO (Illinois Society of Orthodontist)</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center pt-12">
            <a 
              href="/" 
              className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              ← Back to Home
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
