import css from "./styles/forms.module.scss";
import { InputForm } from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";

const RegisterForm = ({ idioma }) => {
	const validationSchema = Yup.object({
		username: Yup.string().required("El nombre de usuario es requerido"),
		password: Yup.string().required("La contraseña es requerida"),
		// la contraseña debe ser igual a la anterior
		repeatPassword: Yup.string()
			.required("La contraseña es requerida")
			.oneOf(
				[Yup.ref("password"), null],
				"Las contraseñas deben coincidir"
			),
	});

	const initialValues = {
		username: "",
		password: "",
		repeatPassword: "",
	};

	const onSubmit = (values) => {
		console.log(values);
	};

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
			<InputForm.Password
				placeholder={
					idioma === "es" ? "Repetir contraseña" : "Repeat password"
				}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.repeatPassword}
				name='repeatPassword'
				error={formik.errors.repeatPassword}
			/>
			<Button className={"w-full rounded-md"} type='submit'>
				{idioma === "es" ? "Registrarse" : "Register"}
			</Button>
		</form>
	);
};

export default RegisterForm;
