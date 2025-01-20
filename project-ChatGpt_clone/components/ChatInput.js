function ChatInput({ onSendMessage, disabled }) {
    const [message, setMessage] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form data-name="chat-input-form" onSubmit={handleSubmit} className="chat-input">
            <textarea
                data-name="message-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Send a message..."
                rows="1"
                className="w-full"
                disabled={disabled}
            />
            <button
                data-name="send-button"
                type="submit"
                className="send-button"
                disabled={disabled || !message.trim()}
            >
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    );
}
