import React from 'react';

const Architecture: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Architecture Differences</h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">32-bit vs 64-bit Architectures</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-indigo-600">32-bit (x86)</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Limited to 4GB memory addressing</li>
                <li>8 general-purpose registers</li>
                <li>Parameters primarily stack-based</li>
                <li>Simple calling conventions</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-indigo-600">64-bit (x64)</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Vast memory addressing capability</li>
                <li>16 general-purpose registers</li>
                <li>Register-based parameter passing</li>
                <li>More complex optimizations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Key Architectural Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Memory Model</h4>
              <ul className="space-y-1 text-sm">
                <li>x86: 32-bit addresses</li>
                <li>x64: 48-bit addresses</li>
                <li>x64: Larger virtual space</li>
                <li>x64: Better memory protection</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Register Set</h4>
              <ul className="space-y-1 text-sm">
                <li>x64: Extended registers (R8-R15)</li>
                <li>x64: Wider registers (64-bit)</li>
                <li>x64: More XMM registers</li>
                <li>x64: Better SIMD support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Calling Convention Differences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Windows x64</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Uses RCX, RDX, R8, R9 for parameters</li>
              <li>• 32-byte shadow space required</li>
              <li>• XMM0-XMM3 for floating point</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">System V AMD64</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Uses RDI, RSI, RDX, RCX, R8, R9</li>
              <li>• No shadow space required</li>
              <li>• XMM0-XMM7 for floating point</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4">Performance Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Register Availability</h4>
            <p className="text-gray-600">
              64-bit systems offer more registers, reducing stack usage and improving
              performance through better register allocation and fewer memory accesses.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Memory Impact</h4>
            <p className="text-gray-600">
              64-bit applications use more memory due to wider pointers and
              alignment requirements, but benefit from larger address space and
              better memory management capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;