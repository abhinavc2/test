import React from 'react';

const ParameterPassing: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Parameter Passing</h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Parameter Passing Methods</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-indigo-600">Register-Based Passing</h4>
              <p className="text-gray-600">
                Modern calling conventions prioritize register-based parameter passing for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Faster function calls</li>
                <li>Reduced memory access</li>
                <li>Better performance</li>
                <li>Optimized CPU usage</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-indigo-600">Stack-Based Passing</h4>
              <p className="text-gray-600">
                Parameters are pushed onto the stack when:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Too many parameters for registers</li>
                <li>Large data structures</li>
                <li>Variable argument lists</li>
                <li>Register pressure is high</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Common Register Assignments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Windows x64</h4>
              <ul className="space-y-1 text-sm">
                <li>RCX: First parameter</li>
                <li>RDX: Second parameter</li>
                <li>R8: Third parameter</li>
                <li>R9: Fourth parameter</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">System V AMD64</h4>
              <ul className="space-y-1 text-sm">
                <li>RDI: First parameter</li>
                <li>RSI: Second parameter</li>
                <li>RDX: Third parameter</li>
                <li>RCX: Fourth parameter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Parameter Passing Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Pass by Value</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Copy of data is passed</li>
              <li>• Original unchanged</li>
              <li>• Safe but costly for large data</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Pass by Reference</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Address is passed</li>
              <li>• Original can be modified</li>
              <li>• Efficient for large data</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Pass by Register</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Uses CPU registers</li>
              <li>• Fastest method</li>
              <li>• Limited by register count</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4">Special Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Floating Point Parameters</h4>
            <p className="text-gray-600">
              Modern calling conventions use dedicated floating-point registers (XMM0-XMM7)
              for passing floating-point values, improving performance for numerical computations.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Structure Passing</h4>
            <p className="text-gray-600">
              Small structures may be split across registers, while larger ones are typically
              passed by reference to avoid copying overhead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParameterPassing;