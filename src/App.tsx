import './styles.css';
import { PageGenerator } from '@homework-task/components/pages/PageGenerator';

import { page } from './data/pageGenerator';

function App() {
    return (
        <main>
            <PageGenerator data={page} />
        </main>
    );
}

export default App;
