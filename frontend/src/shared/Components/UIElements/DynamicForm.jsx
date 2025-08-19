import React from 'react';
import { useForm } from 'react-hook-form';

const DynamicForm = ({ title, fields, onSubmit, footer }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
        if (onSubmit) onSubmit(data);
    };

    return (
        <div className=''>
            <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="card-basic flex-col m-4 space-y-6"
            >
                {/* Header */}
                <div className="p-2">
                    <h2 className="text-2xl font-semibold text-center">{title}</h2>
                </div>

                {fields.map((field) => (
                    <div key={field.name} className="space-y-1">
                        <label className="block text-gray-700">{field.label}</label>
                        {field.type === 'textarea' ? (
                            <textarea
                                defaultValue={field.value || ''}
                                {...register(field.name, { required: field.required })}
                                className="w-full p-2 border rounded-md shadow-xs hover:ring-secondary-subtle focus:outline-hidden focus:ring-2 focus:ring-secondary transition-all duration-300"
                            />
                        ) : (
                            <input
                                type={field.type}
                                defaultValue={field.value || ''}
                                {...register(field.name, { required: field.required })}
                                className="w-full p-2 border rounded-md shadow-xs hover:ring-secondary-subtle focus:outline-hidden focus:ring-2 focus:ring-secondary transition-all duration-300"
                            />
                        )}
                        {errors[field.name] && (
                            <span className="text-danger text-sm">
                                {field.label} is required
                            </span>
                        )}
                    </div>
                ))}
                {footer}
            </form>
        </div>
    );
};

export default DynamicForm;
