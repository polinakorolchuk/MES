import {useState} from "react";

export const Task3 = () => {
    const [message, setMessage] = useState('');

    const logMessage = (event) => {
        event.preventDefault();
        console.log(message);
    }

    return (
        <form
            onSubmit={(e) => logMessage(e)}
            style={{display: 'flex', flexDirection: 'column', gap: 20, width: 150}}
        >
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit'>Log</button>
        </form>
    )
}