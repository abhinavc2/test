import React from 'react';

const Basics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Basic Concepts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Parameter Passing</h3>
          <p className="text-gray-600 mb-4">
            In x86-64, the first six integer arguments are passed in registers:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>RDI (1st parameter)</li>
            <li>RSI (2nd parameter)</li>
            <li>RDX (3rd parameter)</li>
            <li>RCX (4th parameter)</li>
            <li>R8 (5th parameter)</li>
            <li>R9 (6th parameter)</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Additional parameters are passed on the stack.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Local Variables</h3>
          <p className="text-gray-600">
            Local variables are kept on the stack and accessed relative to the base pointer.
            This provides a stable reference point for accessing variables throughout
            the function's execution.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">CPU State Restoration</h3>
          <p className="text-gray-600">
            The return address is kept on the stack, and the ret instruction ensures
            execution continues at the caller. This mechanism allows functions to return
            to their correct calling location.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Stack Frame Cleanup</h3>
          <p className="text-gray-600">
            The stack frame is cleaned by restoring rbp and modifying rsp. In some
            conventions, the caller is responsible for cleaning the stack after
            the function returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basics;