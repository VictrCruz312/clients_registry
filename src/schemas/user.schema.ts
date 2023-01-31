import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup
    .string()
    .required("[name] - nome completo é obrigatorio")
    .min(6, "[name] - nome completo deve ter no minimo 6 caracteres"),
  email: yup
    .string()
    .email("Email inválido")
    .required("[email] - Email é obrigatorio"),
  password: yup
    .string()
    .matches(/[A-Z]/, "[password] - Senha deve conter uma letra maiuscula")
    .matches(/[a-z]/, "[password] - Senha deve conter uma letra minuscula")
    .matches(/[0-9]/, "[password] - Senha deve conter um numero")
    .matches(
      /[@#$%&*()_+-=`~:;.,<>]/,
      "[password] - Senha deve conter um caractere especial"
    )
    .min(8, "[password] - Minimo 8 caracteres")
    .required("[password] - Senha é obrigatorio"),
  telephone: yup.string().nullable(),
  cellphone: yup
    .string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "[cellphone] - Celular deve ser um numero valido com DDD + numero neste formato: '(00) 00000-0000'"
    )
    .required("[cellphone] - Celular é obrigatorio"),
});
