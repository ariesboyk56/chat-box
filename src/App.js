import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
    height="100vh"
    projectID="f0f5c789-dbe5-499e-bcc6-add65d9d74a9"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
