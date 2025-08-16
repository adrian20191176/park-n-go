import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-50">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900">ParkNGo</h1>
        <div className="w-12"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Search Bar */}
        <div className="p-4 bg-white z-10">
          <div className="flex items-center bg-gray-50 rounded-xl p-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
            <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input 
              type="text" 
              placeholder="Search by station or address" 
              className="flex-1 border-none bg-transparent text-base text-gray-700 outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative bg-gray-200 mx-4 mb-4 rounded-xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-500 text-sm">
            <p>Map will be displayed here</p>
          </div>
          
          {/* Zoom Controls */}
          <div className="absolute right-4 top-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          {/* Floating Action Button */}
          <button className="absolute bottom-4 right-4 w-14 h-14 bg-blue-500 border-none rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all hover:shadow-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="flex bg-white border-t border-gray-200 py-2 sticky bottom-0 z-50">
        <button 
          className={`flex-1 flex flex-col items-center p-2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors rounded-lg mx-1 ${activeTab === 'home' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span className="text-xs font-medium">Home</span>
        </button>
        
        <button 
          className={`flex-1 flex flex-col items-center p-2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors rounded-lg mx-1 ${activeTab === 'search' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <span className="text-xs font-medium">Search</span>
        </button>
        
        <button 
          className={`flex-1 flex flex-col items-center p-2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors rounded-lg mx-1 ${activeTab === 'trips' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('trips')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span className="text-xs font-medium">Trips</span>
        </button>
        
        <button 
          className={`flex-1 flex flex-col items-center p-2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors rounded-lg mx-1 ${activeTab === 'inbox' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('inbox')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-xs font-medium">Inbox</span>
        </button>
        
        <button 
          className={`flex-1 flex flex-col items-center p-2 bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors rounded-lg mx-1 ${activeTab === 'profile' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="text-xs font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
