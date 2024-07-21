import { ReactNode, useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import {
    useForm,
    SubmitHandler,
    FieldValues,
    FieldErrors,
    UseFormRegister,
    UseFormSetError,
    Path,
} from 'react-hook-form';
import { ZodError, ZodSchema, ZodTypeDef } from 'zod';

import { Loader } from '@homework-task/components/Loader';
import { Toaster } from '@homework-task/components/Toaster';

interface FormGeneratorProps<T extends FieldValues> {
    validationSchema: ZodSchema<T, ZodTypeDef, T>;
    apiHook: (data: T) => Promise<T>;
    renderForm: (props: {
        register: UseFormRegister<T>;
        errors: FieldErrors<T>;
    }) => ReactNode;
    successMessage: string;
    errorMessage: string;
}

const FormGenerator = <T extends FieldValues>({
    validationSchema,
    apiHook,
    renderForm,
    successMessage,
    errorMessage,
}: FormGeneratorProps<T>) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
        reset,
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation({
        mutationFn: apiHook,
        onSuccess: () => {
            setToastMessage(successMessage);
            reset();
        },
        onError: (error) => handleErrors(error, setError),
    });

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    const onSubmit: SubmitHandler<T> = async (data) => {
        try {
            validationSchema.parse(data);
            await mutation.mutateAsync(data);
            clearErrors();
        } catch (error) {
            handleErrors(error, setError);
        }
    };

    const handleErrors = <T extends FieldValues>(
        error: unknown,
        setError: UseFormSetError<T>
    ) => {
        if (error instanceof ZodError) {
            error.errors.forEach((error) => {
                const field = error.path.join('.') as Path<T>;
                setError(field, { type: 'manual', message: error.message });
            });
        }
    };

    return (
        <div className="space-y-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    void handleSubmit(onSubmit)(e);
                }}
                className="space-y-4"
            >
                {renderForm({
                    register,
                    errors,
                })}

                {mutation.isError && (
                    <p className="text-red-500">{errorMessage}</p>
                )}

                <div className="flex items-center justify-center mt-4">
                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className={clsx(
                            'bg-primary',
                            'text-white',
                            'font-bold',
                            'py-2',
                            'px-6',
                            'rounded-lg',
                            'transition',
                            'duration-300',
                            'ease-in-out',
                            'transform',
                            'hover:-translate-y-1',
                            'hover:scale-105',
                            'focus:outline-none',
                            'focus:ring-2',
                            'focus:ring-offset-2',
                            'focus:ring-primary',
                            'disabled:bg-gray40'
                        )}
                    >
                        {mutation.isPending ? <Loader /> : 'Submit'}
                    </button>
                </div>
            </form>
            {toastMessage && <Toaster message={toastMessage} />}
        </div>
    );
};

export default FormGenerator;
