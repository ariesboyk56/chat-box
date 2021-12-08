import { useState } from "react"
import axios from "axios"
const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const authObject = {'Project-ID': "f0f5c789-dbe5-499e-bcc6-add65d9d74a9", 'User-Name': username, 'User-Secret': password}
        try {
            // username | password => chatengine -> give message
           await axios.get('https://api.chatengine.io/chats/', {headers: authObject})
           
           // works out -> logged in
           localStorage.setItem('username', username)
           localStorage.setItem('password', password)
            
           window.location.reload()
        } catch (error) {
            // error -> try with new username
            setError('Oops, incorrect credentials.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input name="username" type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" />
                    <input name="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
