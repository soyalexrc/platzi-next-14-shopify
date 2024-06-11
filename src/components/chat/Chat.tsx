'use client';

import { useChat } from '@ai-sdk/react';

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/chat',
    });

    return (
        <>
            {messages.map(message => (
                <div key={message.id}>
                    {message.role === 'user' ? 'User: ' : 'AI: '}
                    {message.content}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    name="prompt"
                    value={input}
                    onChange={handleInputChange}
                    id="input"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
