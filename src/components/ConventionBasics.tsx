import React from 'react';

const ConventionBasics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Convention Basics</h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Core Components</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-indigo-600">Stack Frame</h4>
              <p className="text-gray-600">
                A stack frame is a memory region allocated for a function call that contains:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Local variables</li>
                <li>Return address</li>
                <li>Saved registers</li>
                <li>Parameters (if stack-passed)</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-indigo-600">Register Usage</h4>
              <p className="text-gray-600">
                Registers are assigned specific roles:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Parameter passing</li>
                <li>Return values</li>
                <li>Stack pointer</li>
                <li>Frame pointer</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Parameter Handling</h4>
              <p className="text-sm">Defines how arguments are passed to functions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Stack Management</h4>
              <p className="text-sm">Controls allocation and deallocation of stack memory</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Register Preservation</h4>
              <p className="text-sm">Specifies which registers must be preserved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Common Calling Conventions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">cdecl (C Declaration)</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Caller cleans the stack</li>
              <li>• Parameters pushed right-to-left</li>
              <li>• Return value in EAX/RAX</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">stdcall</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Callee cleans the stack</li>
              <li>• Parameters pushed right-to-left</li>
              <li>• Common in Windows API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConventionBasics;