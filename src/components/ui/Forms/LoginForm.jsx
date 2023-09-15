import Button from "../Button";
import { InputForm } from "../Input";
import css from "./styles/forms.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ idioma }) => {
	// schema de validacion con yup
	const validationSchema = Yup.object({
		username: Yup.string().required("El nombre de usuario es requerido"),
		password: Yup.string().required("La contraseña es requerida"),
	});

	const initialValues = {
		username: "",
		password: "",
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	// uso de formik
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<form className={css.form} onSubmit={formik.handleSubmit}>
			<InputForm
				placeholder={idioma === "es" ? "Nombre de usuario" : "Username"}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.username}
				name='username'
				error={formik.errors.username}
			/>
			<InputForm.Password
				placeholder={idioma === "es" ? "Contraseña" : "Password"}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
				name='password'
				error={formik.errors.password}
			/>
			<Button className={"w-full rounded-md"} type='submit'>
				{idioma === "es" ? "Iniciar Sesión" : "Login"}
			</Button>
		</form>
	);
};

export default LoginForm;
