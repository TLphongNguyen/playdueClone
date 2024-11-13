import React from 'react';
import { useController } from 'react-hook-form';
const Input = ({ name, control, label, placeholder, type = 'text', ...props }) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		defaultValue: '',
	});
	return (
		<div className="mb-4">
			<label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
				{label}
			</label>
			<input
				id={name}
				type={type}
				placeholder={placeholder}
				{...field}
				{...props}
				className="w-full rounded-lg border-[1.5px] border-solid bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#3c50e0] active:border-[#3c50e0] disabled:cursor-default disabled:bg-whiter  dark:text-white dark:focus:border-[#3c50e0]"
			/>
			{error && <p className="text-red-500 text-sm">{error.message}</p>}
		</div>
	);
};

export default Input;
