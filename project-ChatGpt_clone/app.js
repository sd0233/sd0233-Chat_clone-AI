function App() {
    const [messages, setMessages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef(null);
    const chatAgent = React.useMemo(() => createChatAgent(), []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (message) => {
        try {
            const userMessage = { role: 'user', content: message };
            setMessages(prev => [...prev, userMessage]);
            setIsLoading(true);

            const response = await chatAgent.sendMessage(message, messages);
            const aiMessage = { role: 'ai', content: response };
            
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            reportError(error);
            alert('Failed to get response. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div data-name="chat-container" className="chat-container">
            <Sidebar />
            <main data-name="main-content" className="main-content">
                <div data-name="messages-container" className="messages-container">
                    {messages.map((message, index) => (
                        <ChatMessage key={index} message={message} />
                    ))}
                    {isLoading && <Loading />}
                    <div ref={messagesEndRef} />
                </div>
                <div data-name="input-container" className="input-container">
                    <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
                </div>
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
