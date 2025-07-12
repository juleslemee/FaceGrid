import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Download, Zap, Shield, Globe, Palette } from 'lucide-react';

const SEOContent = () => {
  return (
    <div className="max-w-6xl mx-auto mt-32 space-y-16 px-4">
      {/* What is FaceGrid Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What is FaceGrid?
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
          <p>
            FaceGrid generates grids of AI faces for your design projects. Create realistic person grids 
            for mockups, presentations, and prototypes without worrying about copyright or privacy issues. 
            All faces are AI-generated, so they don't represent real people.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Use Cases
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

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Use FaceGrid?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Copyright-Free</h3>
            <p className="text-gray-600 text-sm">
              Use in any project without legal concerns. All faces are AI-generated.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Registration</h3>
            <p className="text-gray-600 text-sm">
              Start generating immediately. No sign-up required.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Privacy Safe</h3>
            <p className="text-gray-600 text-sm">
              Faces don't represent real people, ensuring complete privacy protection.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Formats</h3>
            <p className="text-gray-600 text-sm">
              Download with borders for structure or borderless for clean integration.
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
          Generate professional AI face grids for your next project
        </p>
        <button 
          onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Start Generating Now - It's Free!
        </button>
      </section>
    </div>
  );
};

export default SEOContent;