import { List } from '@homework-task/components/List';

type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export const UserList = () => {
    const renderUser = (user: User) => (
        <li key={user.id} className="p-4 border rounded shadow bg-white">
            <p>
                <strong>ID:</strong> {user.id}
            </p>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Username:</strong> {user.username}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <strong>Phone:</strong> {user.phone}
            </p>
        </li>
    );

    return (
        <List
            apiURL="https://jsonplaceholder.typicode.com/users"
            renderItem={renderUser}
        />
    );
};
