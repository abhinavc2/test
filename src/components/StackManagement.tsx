import React from 'react';

const StackManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Stack Management</h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Stack Frame Lifecycle</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">Function Prologue</h4>
              <p className="text-gray-600 mb-3">
                When a function is called, the following steps occur:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Push return address onto stack</li>
                <li>Save old frame pointer</li>
                <li>Set up new frame pointer</li>
                <li>Allocate space for local variables</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">Function Execution</h4>
              <p className="text-gray-600 mb-3">
                During function execution:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Local variables are accessed relative to frame pointer</li>
                <li>Parameters are accessed at positive offsets</li>
                <li>Local variables are at negative offsets</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">Function Epilogue</h4>
              <p className="text-gray-600 mb-3">
                Before returning:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Restore saved registers</li>
                <li>Restore old frame pointer</li>
                <li>Remove local variables</li>
                <li>Return to caller</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Stack Frame Structure</h3>
          <div className="bg-white/10 p-4 rounded-lg space-y-3">
            <div className="border-b border-white/20 pb-2">
              <span className="font-mono">High Address</span>
            </div>
            <div className="pl-4 space-y-2">
              <div className="bg-white/5 p-2 rounded">Parameters</div>
              <div className="bg-white/5 p-2 rounded">Return Address</div>
              <div className="bg-white/5 p-2 rounded">Saved Frame Pointer</div>
              <div className="bg-white/5 p-2 rounded">Local Variables</div>
              <div className="bg-white/5 p-2 rounded">Saved Registers</div>
            </div>
            <div className="border-t border-white/20 pt-2">
              <span className="font-mono">Low Address</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Variable Recovery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Frame Pointer Benefits</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Stable reference point for variables</li>
              <li>• Simplifies debugging and stack traces</li>
              <li>• Enables reliable variable access</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg text-indigo-600 mb-3">Stack Pointer Usage</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Dynamic allocation of space</li>
              <li>• Manages function call overhead</li>
              <li>• Tracks current stack position</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackManagement;