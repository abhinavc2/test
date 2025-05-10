import React, { useState } from 'react';
import { Book, Code2, Cpu, Layout, Library } from 'lucide-react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Basics from './components/Basics';
import Implementation from './components/Implementation';
import Quiz from './components/Quiz';

const sections = [
  { id: 'intro', title: 'Introduction', icon: Book },
  { id: 'basics', title: 'Basic Concepts', icon: Layout },
  { id: 'implementation', title: 'Implementation', icon: Library },
  { id: 'quiz', title: 'Practice Quiz', icon: Code2 }
];

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [quizCompleted, setQuizCompleted] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <Introduction />;
      case 'basics':
        return <Basics />;
      case 'implementation':
        return <Implementation />;
      case 'quiz':
        return <Quiz onComplete={() => setQuizCompleted(true)} />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cpu className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Calling Conventions</h1>
          </div>
          {quizCompleted && (
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Quiz Completed!</span>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6">
        <Navigation 
          sections={sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <main className="flex-1 bg-white rounded-lg shadow-md p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App