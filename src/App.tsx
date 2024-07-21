import { PostForm } from '@homework-task/components/form/PostForm';
import { Landing } from '@homework-task/components/landing/Landing';
import { UserList } from '@homework-task/components/UserList';

import './styles.css';

function App() {
    return (
        <main>
            <Landing />
            <UserList />
            <PostForm />
        </main>
    );
}

export default App;
