import React, { useState } from 'react';
import { Send, Users, Settings, Plus, Hash } from 'lucide-react';

const Dashboard = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        {/* Windows 7 Style Window */}
        <div className="w-11/12 h-5/6 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-2xl border border-gray-400 transition-all duration-300">
          {/* Window Title Bar */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
              <span className="font-semibold">ChatRoom</span>
            </div>
          </div>

          {/* Window Content */}
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col border-r border-gray-600">
              {/* User Profile */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <div className="font-semibold">User Profile</div>
                    <div className="text-xs text-green-400">● Online</div>
                  </div>
                </div>
              </div>

              {/* Rooms */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-300">ROOMS</h3>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Room placeholders - replace with your data */}
                  <div className="text-gray-400 text-sm p-2">
                    Your rooms will appear here
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="p-3 border-t border-gray-700">
                <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Settings</span>
                </button>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-white">
              {/* Chat Header */}
              <div className="p-4 bg-gray-100 border-b border-gray-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-gray-600" />
                  <h2 className="font-semibold text-gray-800">Chat Room</h2>
                  <span className="text-sm text-gray-500">0 members</span>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-lg">
                  <Users className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <p className="text-gray-900 text-center">Your chat messages will appear here</p>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-gray-200 border-t border-gray-300">
                <div className="flex items-center gap-3">
                  <input
                    className="flex-1 p-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
                    onClick={handleSendMessage}
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;