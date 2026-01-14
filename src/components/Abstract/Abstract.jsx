import React from 'react';
import { FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const Abstract = () => {
  return (
    <section id="abstract" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">Abstract Submission</h2>
        <p className="section-subtitle">
          Submit your research abstracts for the conference
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Submit Abstract Section */}
          <div id="submit-abstract" className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-start mb-6">
                <FaFileAlt className="text-4xl text-[#D17950] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Submit Your Abstract
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We invite researchers, clinicians, and healthcare professionals to submit abstracts for oral and poster presentations at the CVTS Boot Camp 2026.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Important Dates</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D17950] mr-2">•</span>
                      <span>Abstract Submission Deadline: <strong>January 21, 2026</strong></span>
                    </li>
                    {/* <li className="flex items-start">
                      <span className="text-[#D17950] mr-2">•</span>
                      <span>Notification of Acceptance: <strong>December 30, 2025</strong></span>
                    </li> */}
                    {/* <li className="flex items-start">
                      <span className="text-[#D17950] mr-2">•</span>
                      <span>Final Submission: <strong>January 15, 2026</strong></span>
                    </li> */}
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Categories</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-600 mr-2" />
                      <span>Cardiac Surgery</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-600 mr-2" />
                      <span>Thoracic Surgery</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-600 mr-2" />
                      <span>Vascular Surgery</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-600 mr-2" />
                      <span>Pediatric Cardiac Surgery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="https://forms.gle/Vs7NDJN8F91KMXMH8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#D17950] to-[#DC8159] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Submit Abstract Now
                </a>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}
          <div id="abstract-guidelines" className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Submission Guidelines
            </h3>

            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Format Requirements</h4>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>Maximum word count: 300 words</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>Structure: Title, Authors, Institution, Introduction, Methods, Results, Conclusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>Font: Times New Roman, 12pt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>File format: PDF or Word document</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Review Process</h4>
                <p className="leading-relaxed mb-4">
                  All submitted abstracts will undergo a peer-review process by our scientific committee. 
                  Abstracts will be evaluated based on:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>Scientific merit and originality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>Clinical relevance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D17950] mr-2">•</span>
                    <span>Clarity and quality of presentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-gray-800 font-semibold mb-2">📌 Important Note:</p>
                <p className="text-gray-700">
                  At least one author must be registered for the conference. Selected abstracts will be 
                  published in the conference proceedings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract;