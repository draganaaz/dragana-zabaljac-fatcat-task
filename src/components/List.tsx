import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { Loader } from '@homework-task/components/Loader';

interface ListProps<T> {
    apiURL: string;
    renderItem: (item: T) => ReactNode;
}

export const List = <T,>({
    apiURL,
    renderItem,
}: ListProps<T>): ReactElement => {
    const [items, setItems] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const errorMessage = 'There was an error fetching data.';

    useEffect(() => {
        fetch(apiURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: T[]) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(`Failed to fetch data. Error: ${err}`);
                setLoading(false);
            });
    }, [apiURL]);

    return (
        <div className="container mx-auto p-4">
            {loading ? (
                <Loader />
            ) : error ? (
                <p className="text-center">{errorMessage}</p>
            ) : (
                <ul className="space-y-4">
                    {items.map((item) => renderItem(item))}
                </ul>
            )}
        </div>
    );
};
