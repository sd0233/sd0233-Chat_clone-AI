function Sidebar() {
    return (
        <div data-name="sidebar" className="w-64 bg-gray-900 p-4 hidden md:block">
            <div data-name="new-chat-button" className="mb-4">
                <button className="w-full bg-emerald-600 text-white rounded-md py-2 px-4 hover:bg-emerald-700 transition-colors">
                    <i className="fas fa-plus mr-2"></i>
                    New Chat
                </button>
            </div>
            <div data-name="chat-history" className="space-y-2">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Chat History</div>
                {/* Chat history items would be dynamically added here */}
            </div>
        </div>
    );
}
