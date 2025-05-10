import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Calling Conventions: What Are They?</h2>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          Calling conventions define how functions receive parameters and return values. 
          They are necessary when calling functions in assembly, C, or any other language 
          to ensure proper execution.
        </p>

        <div className="my-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-indigo-900 mb-4">
            Why Are Different Calling Conventions Necessary?
          </h3>
          <p className="text-gray-700">
            Different programming languages and architectures handle function calls differently,
            requiring different standards. Ignoring these conventions can lead to incorrect 
            behavior or program crashes due to improper parameter handling.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-indigo-600 mb-3">32-bit vs 64-bit Programs</h3>
            <p className="text-gray-600">
              64-bit improves efficiency by using registers for arguments more frequently than 
              32-bit, which passes arguments on the stack. This difference in parameter passing 
              is a key distinction between the two architectures.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-indigo-600 mb-3">Importance of Conventions</h3>
            <p className="text-gray-600">
              Without proper calling conventions, functions wouldn't receive the correct parameters,
              leading to crashes or incorrect behavior. They're essential for program stability.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Simple X86 Function Call Example</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`; Simple function call example
section .text
global _start

my_function:
    push rbp           ; Save old base pointer
    mov rbp, rsp      ; Set up new base pointer
    
    ; Function body here
    
    mov rsp, rbp      ; Restore stack pointer
    pop rbp           ; Restore base pointer
    ret               ; Return to caller

_start:
    push rdi          ; Save parameter
    call my_function  ; Call the function
    add rsp, 8       ; Clean up stack`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Introduction;