export const metadata = {
  title: "Blog | Dr. Russell Choy Orthodontics",
  description: "Read the latest orthodontic tips, news, and insights from Dr. Russell Choy and our team.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-xl text-slate-700 font-medium">
            Orthodontic Tips, News & Insights
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <span className="text-sm text-blue-600 font-medium">Featured Post</span>
              <h2 className="text-3xl font-bold text-blue-900 mt-2 mb-4">
                The Complete Guide to Adult Orthodontics
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                It's never too late to achieve the smile you've always wanted. Learn about the orthodontic 
                options available for adults and how modern treatments can fit seamlessly into your lifestyle.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Published on March 15, 2024</span>
                <a href="#" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Blog Post 1 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🦷</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Oral Health</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Maintaining Oral Hygiene with Braces
                </h3>
                <p className="text-slate-700 mb-4">
                  Essential tips for keeping your teeth and gums healthy during orthodontic treatment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">March 10, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Treatment Options</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Clear Aligners vs Traditional Braces
                </h3>
                <p className="text-slate-700 mb-4">
                  Compare the benefits and considerations of different orthodontic treatment options.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">March 5, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">👶</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Children's Orthodontics</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  When Should Children First Visit an Orthodontist?
                </h3>
                <p className="text-slate-700 mb-4">
                  Learn about the optimal timing for your child's first orthodontic evaluation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">February 28, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 4 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🍎</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Lifestyle</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Foods to Avoid with Braces
                </h3>
                <p className="text-slate-700 mb-4">
                  A comprehensive guide to orthodontic-friendly foods and what to avoid.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">February 20, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 5 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Technology</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  The Latest in Orthodontic Technology
                </h3>
                <p className="text-slate-700 mb-4">
                  Discover how modern technology is making orthodontic treatment faster and more comfortable.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">February 15, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

            {/* Blog Post 6 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">💰</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">Financial</span>
                <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
                  Understanding Orthodontic Insurance Coverage
                </h3>
                <p className="text-slate-700 mb-4">
                  Navigate insurance benefits and payment options for orthodontic treatment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">February 10, 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>

          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter for the latest orthodontic tips and practice news.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
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
