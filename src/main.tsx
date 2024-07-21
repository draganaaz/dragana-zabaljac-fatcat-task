import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import App from '@homework-task/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("No element with id 'root' found");
}

const queryClient = new QueryClient();

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
