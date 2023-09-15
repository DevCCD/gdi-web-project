import { useState } from "react";
import css from "./styles/styles.module.scss";
import EyeIcon from "./icon/EyeIcon";

const InputForm = (props) => {
	const { error } = props;

	return (
		<div className={css.wrapper}>
			<input
				type={props.type || "text"}
				{...props}
				className={error ? `${css.input} ${css.error}` : css.input}
			/>
			{error && (
				<span className='text-red-500 text-xs text-start ml-0'>
					{error}
				</span>
			)}
		</div>
	);
};

const Password = (props) => {
	const { error, style } = props;
	const [showPassword, setShowPassword] = useState(false);

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className={css.wrapper}>
			<div className='relative items-center flex'>
				<input
					{...props}
					type={showPassword ? "text" : "password"}
					className={error ? `${css.input} ${css.error}` : css.input}
					style={{
						...style,
						paddingRight: "2.5rem",
					}}
				/>
				<button
					type='button'
					role='button'
					title='Mostrar contraseña'
					className='absolute w-8 h-8 hover:bg-[#f0f2f5] flex justify-center items-center rounded-full cursor-pointer right-2.5 text-gray-600'
					onClick={togglePassword}
				>
					<EyeIcon size={18} showeye={showPassword ? "show" : null} />
				</button>
			</div>
			{error && (
				<span className='text-red-500 text-xs text-start ml-0'>
					{error}
				</span>
			)}
		</div>
	);
};

InputForm.Password = Password;

export default InputForm;
