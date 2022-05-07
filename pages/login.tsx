import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form"

type LoginFormValues = {
  email: string
  password: string
}

const classNames = (...rest: string[]) => rest.join(" ")
const BUTTON_HEIGHT = "h-15" // height: 3.75rem /* 60px */;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data)

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
      <div className="flex h-114 w-128 flex-col items-center justify-center rounded-lg bg-gray-800 text-lg text-white">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-96 flex-col">
          <LoginInput
            placeholder="user@email.com"
            fieldName="email"
            register={register}
            errors={errors}
          />
          <LoginInput
            placeholder="*********"
            fieldName="password"
            register={register}
            errors={errors}
          />

          <button
            type="submit"
            className={classNames(
              "mt-4 rounded-lg bg-yellow-400 p-2 font-bold uppercase",
              BUTTON_HEIGHT
            )}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

function LoginInput({
  placeholder,
  fieldName,
  register,
  errors,
}: {
  placeholder: string
  fieldName: keyof LoginFormValues
  register: UseFormRegister<LoginFormValues>
  errors: FieldErrors
}) {
  const isPassword = fieldName === "password"
  return (
    <>
      <input
        placeholder={placeholder}
        {...(register(fieldName), { required: true })}
        className={classNames(
          BUTTON_HEIGHT,
          "mb-7 rounded-lg bg-gray-700 pl-4",
          isPassword ? "pt-1 text-2xl placeholder-shown:pt-3" : "pt-1"
          // Center the placeholders, compensating for ***** (password)
        )}
        type={isPassword ? "password" : "text"}
      />
      {errors[fieldName] && <span>This field is required</span>}
    </>
  )
}
