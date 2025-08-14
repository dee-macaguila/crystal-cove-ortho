export const metadata = {
  title: "Our Practice | Dr. Russell Choy Orthodontics",
  description: "Facility, appointments, financials, and cancellation policy for Dr. Russell Choy Orthodontics.",
};

export default function OurPracticePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 tracking-tight mb-4">
            Our Practice
          </h1>
          <p className="text-xl text-slate-700 font-medium">
            A Beautiful Practice For All Your Orthodontic Needs
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Facility Section */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Facility</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We are proud to provide a state-of-the-art facility for the highest quality orthodontic care available. 
              It is one of our top priorities to protect the well-being of our valued patients. For this reason, our office 
              meets and surpasses all OSHA (Occupational Safety and Health Administration) and CDC (Center for Disease Control) standards. 
              We are confident that you will feel right at home in our office as we welcome all patients as if they were family.
            </p>
          </div>

          {/* Appointments Section */}
          <div className="bg-white border-l-4 border-blue-500 pl-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Appointments</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you would like to make an appointment, please contact our office by phone or email. Our office facilitates 
              communications and emergency calls and appointments are available and welcome, especially for new patients seeking help.
            </p>
          </div>

          {/* Financial Section */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Financial</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We will be more than happy to submit all insurance forms for you and help you recover the most from your benefits. 
              We will do everything we can to help you afford the treatment you need and want. For patients who require major work, 
              a complete payment plan is designed with an appropriate payment schedule. Forms of payment accepted by the office are 
              check, cash, or any major credit card. We accept most insurances and third party financing.
            </p>
          </div>

          {/* Cancellation Section */}
          <div className="bg-white border-l-4 border-blue-500 pl-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cancellation</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you are unable to keep an appointment, we ask that you kindly provide us with at least 24 hours notice. 
              We ask for this advance notice so that we can offer this appointment to another patient. A fee may be charged 
              if a patient does not show up for an appointment without sufficient notice.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Advanced Technology</h3>
                <p className="text-slate-600">Latest digital scanning and treatment planning for precise results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0 a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Personalized Care</h3>
                <p className="text-slate-600">Individualized treatment plans tailored to your unique needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Flexible Scheduling</h3>
                <p className="text-slate-600">Convenient appointment times to fit your busy lifestyle.</p>
              </div>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-center">
            <p className="text-xl text-white leading-relaxed">
              We would like to take this opportunity to thank you for choosing our practice for your orthodontic care.
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="text-center pt-8">
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