import React from 'react';

const Implementation: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Implementation Details</h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Stack Frame Management</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">Function Entry</h4>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`push rbp           ; Save old base pointer
mov rbp, rsp      ; Set new base pointer
sub rsp, N       ; Allocate space for locals`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">Function Exit</h4>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`mov rsp, rbp      ; Restore stack pointer
pop rbp           ; Restore base pointer
ret              ; Return to caller`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
          <h3 className="text-xl font-semibold mb-4">Architecture Differences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">32-bit (x86)</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Parameters primarily on stack</li>
                <li>Fewer registers available</li>
                <li>Simpler calling conventions</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium text-lg text-indigo-600 mb-3">64-bit (x64)</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Parameters primarily in registers</li>
                <li>More registers available</li>
                <li>More efficient parameter passing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;