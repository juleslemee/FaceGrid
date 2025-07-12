import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Download, Zap, Shield, Globe, Palette } from 'lucide-react';

const SEOContent = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 space-y-16 px-4">
      {/* What is FaceGrid Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What is FaceGrid? The Ultimate AI Face Grid Generator
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            FaceGrid is a powerful <strong>AI face grid generator</strong> that creates professional grids of 
            artificial faces perfect for <strong>mockups, presentations, and design projects</strong>. Our free 
            <strong>fake people generator</strong> uses advanced AI technology to produce high-quality, 
            copyright-free faces that look completely realistic.
          </p>
          <p>
            Whether you're a designer creating mockups, a developer building applications, or a marketer 
            preparing presentations, FaceGrid provides the perfect solution for generating 
            <strong>AI faces for mockups</strong> without any legal concerns or registration requirements.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Perfect Use Cases for AI Face Grids
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Design Mockups</h3>
              <p className="text-gray-600">
                Create stunning website and app mockups with realistic user profiles. 
                Perfect for showcasing social media platforms, dating apps, and user directories.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Presentations</h3>
              <p className="text-gray-600">
                Enhance business presentations with diverse, professional-looking personas. 
                Ideal for HR training materials, customer persona slides, and team building content.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600">
                Populate your applications with realistic user avatars during development. 
                Perfect for testing, demos, and portfolio projects without privacy concerns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose FaceGrid for AI Face Generation?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Multiple Grid Sizes</h3>
                <p className="text-gray-600">
                  Generate grids from 3x3 (9 faces) up to 10x15 (150 faces). Choose the perfect 
                  size for your project needs, whether it's a small mockup or a large-scale presentation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Download className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Download Options</h3>
                <p className="text-gray-600">
                  Download your AI face grids with borders for structured layouts, or choose 
                  borderless options for seamless integration into your designs. Both formats 
                  are optimized for professional use.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">High-Quality AI Technology</h3>
                <p className="text-gray-600">
                  Our advanced AI generates photorealistic faces with diverse ethnicities, 
                  ages, and appearances. Each face is unique and created specifically for your grid.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for Professionals</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                UI/UX Designers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Web Developers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Marketing Teams
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Content Creators
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Product Managers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Benefits of Using AI-Generated Faces
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Copyright-Free</h3>
            <p className="text-gray-600 text-sm">
              All generated faces are completely copyright-free. Use them in any project without 
              legal concerns or attribution requirements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Registration</h3>
            <p className="text-gray-600 text-sm">
              Start generating face grids immediately. No sign-up, no account creation, 
              no personal information required.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Privacy Safe</h3>
            <p className="text-gray-600 text-sm">
              These faces don't represent real people, ensuring complete privacy protection 
              for your projects and presentations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">
              Generate and download professional face grids in seconds. Perfect for tight 
              deadlines and quick prototyping.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              What is an AI face grid generator?
            </h3>
            <p className="text-gray-600">
              An AI face grid generator is a tool that uses artificial intelligence to create 
              multiple realistic human faces arranged in a grid format. These faces are 
              completely artificial and don't represent real people, making them perfect for 
              design mockups, presentations, and development projects.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Can I use these AI-generated faces commercially?
            </h3>
            <p className="text-gray-600">
              Yes! All faces generated by FaceGrid are completely copyright-free and can be 
              used for any purpose, including commercial projects. Since these faces are 
              AI-generated and don't represent real people, there are no legal restrictions 
              on their use.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              What grid sizes are available?
            </h3>
            <p className="text-gray-600">
              FaceGrid offers multiple grid sizes ranging from 3x3 (9 faces) to 10x15 (150 faces). 
              Popular sizes include 4x4 (16 faces), 5x5 (25 faces), and 6x6 (36 faces). Smaller 
              grids generate faster, while larger grids are perfect for extensive mockups.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              How long does it take to generate a face grid?
            </h3>
            <p className="text-gray-600">
              Generation time depends on the grid size. Small grids (3x3) typically take 10-15 seconds, 
              while larger grids (10x15) may take 2-3 minutes. Our progress bar shows real-time 
              updates so you know exactly when your grid will be ready.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Are the faces diverse and realistic?
            </h3>
            <p className="text-gray-600">
              Yes! Our AI generates diverse faces with different ethnicities, ages, genders, 
              and appearances. Each face is photorealistic and unique, ensuring your grids 
              look natural and professional for any project or presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Create Your AI Face Grid?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of designers and developers who trust FaceGrid for their projects
        </p>
        <a 
          href="#top" 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Generating Now - It's Free!
        </a>
      </section>
    </div>
  );
};

export default SEOContent;