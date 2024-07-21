import clsx from 'clsx';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

import FormGenerator from '@homework-task/components/form/FormGenerator';
import { postValidation } from '@homework-task/helpers/validationHelper';

type FormData = z.infer<typeof postValidation>;

const getPosts = async (data: FormData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('An error occured while trying to fetch posts.');
    }

    return response.json();
};

export const PostForm = () => {
    const successMessage = 'Form submitted successfully!';
    const errorMessage = 'An error occurred. Please try again later.';

    const renderForm = (
        register: UseFormRegister<FormData>,
        errors: FieldErrors<FormData>
    ) => (
        <>
            <div>
                <label htmlFor="title" className="text-sm font-medium">
                    Title
                </label>
                <input
                    id="title"
                    {...register('title')}
                    className={clsx(
                        'mt-1',
                        'p-2',
                        'border',
                        'rounded',
                        'w-full',
                        'focus:outline-none',
                        'focus:ring-2',
                        'focus:ring-primary'
                    )}
                />
                {errors.title && (
                    <p className="text-red text-sm mt-1">
                        {errors.title.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="body" className="text-sm font-medium ">
                    Body
                </label>
                <textarea
                    id="body"
                    {...register('body')}
                    className={clsx(
                        'mt-1',
                        'p-2',
                        'border',
                        'rounded',
                        'w-full',
                        'focus:outline-none',
                        'focus:ring-2',
                        'focus:ring-primary'
                    )}
                />
                {errors.body && (
                    <p className="text-red text-sm mt-1">
                        {errors.body.message}
                    </p>
                )}
            </div>
        </>
    );

    return (
        <div className="p-6 max-w-lg mx-auto my-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Add New Post
            </h2>

            <FormGenerator<FormData>
                validationSchema={postValidation}
                apiHook={getPosts}
                renderForm={({ register, errors }) =>
                    renderForm(register, errors)
                }
                successMessage={successMessage}
                errorMessage={errorMessage}
            />
        </div>
    );
};
