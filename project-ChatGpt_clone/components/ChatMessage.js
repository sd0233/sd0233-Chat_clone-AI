function ChatMessage({ message }) {
    const isAI = message.role === 'ai';
    
    return (
        <div data-name="chat-message" className={`message ${isAI ? 'ai' : 'user'}`}>
            <div data-name="message-avatar" className="message-avatar">
                {isAI ? (
                    <i className="fas fa-robot text-emerald-500"></i>
                ) : (
                    <i className="fas fa-user text-purple-500"></i>
                )}
            </div>
            <div data-name="message-content" className="message-content">
                {message.content}
            </div>
        </div>
    );
}
