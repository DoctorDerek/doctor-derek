import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form"

import AppContainer from "@/components/AppContainer"
import GlobalStateContext from "@/components/GlobalStateContext"
import { useActor } from "@xstate/react"

type LoginFormValues = {
  email: string
  password: string
}
const classNames = (...rest: string[]) => rest.join(" ")
const BUTTON_HEIGHT = "h-15" // height: 3.75rem /* 60px */;
const REDIRECT_AFTER_X_SECONDS = 5

export default function Login() {
  // Grab next/router via its useRouter hook, so we can redirect after login.
  const router = useRouter()

  // Set up a justLoggedIn variable in React state to differentiate between if
  // we just logged in (via this page) or if we were already logged in before.
  const [justLoggedIn, setJustLoggedIn] = useState(false)

  // Retrieve our loggedIn/loggedOut status from the global context with xState:
  const globalServices = useContext(GlobalStateContext)
  const [state] = useActor(globalServices.authService)
  const isLoggedIn = state.matches("loggedIn")
  const { send } = globalServices.authService

  // Set up our form handlers using react-hook-form as a helper library:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()
  // Set up onSubmit to interact with authMachine, update state, and redirect.
  const onSubmit: SubmitHandler<LoginFormValues> = ({ email, password }) => {
    // We'll log the user in via global context using our XState authMachine.
    send("LOG_IN", { authorizedUser: email })
    // Note: We already know we have admin/admin because of the form validation.
    console.log(`Attempting login with ${email}/${password} credentials...`)
    // Update the justLoggedIn variable in the local React component's state.
    setJustLoggedIn(true)
    // Use setTimeout to redirect to the Pokédex (homepage) after the timeout.
    setTimeout(() => {
      router.push("/")
    }, REDIRECT_AFTER_X_SECONDS * 1000) // Convert seconds to milliseconds.
  }

  return (
    <AppContainer pageTitle="Login Page (admin/admin)">
      <div className="flex h-114 w-128 flex-col items-center justify-center rounded-lg bg-gray-800 text-lg text-white">
        {!isLoggedIn && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-96 flex-col"
          >
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
            <LoginButton />
          </form>
        )}
        {isLoggedIn && (
          <div>
            <h2>
              {justLoggedIn && "Successfully"}
              {!justLoggedIn && "Currently"} logged in as{" "}
              {state.context.authorizedUser}
            </h2>
            {justLoggedIn && (
              <div>
                <h3>Redirecting in {REDIRECT_AFTER_X_SECONDS} seconds...</h3>
                <h3>
                  Click{" "}
                  <Link href="/" className="underline">
                    here
                  </Link>{" "}
                  if you are not redirected.
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </AppContainer>
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
      {/* Show form validation errors, if any */}
      {errors[fieldName]?.type === "required" && <Required />}
      {errors[fieldName]?.type === "validate" && (
        <Invalid fieldName={fieldName} />
      )}
      <input
        placeholder={placeholder}
        {...register(fieldName, {
          required: true,
          // Note that the only valid email & password are admin/admin:
          validate: (value) => value === "admin",
        })}
        className={classNames(
          BUTTON_HEIGHT,
          "mb-7 rounded-lg bg-gray-700 pl-4",
          // Center the placeholders, compensating for ***** (password):
          isPassword ? "pt-1 text-2xl placeholder-shown:pt-3" : "pt-1"
        )}
        type={isPassword ? "password" : "text"}
      />
    </>
  )

  function Required() {
    return <FormError text="This field is required" />
  }

  function Invalid({ fieldName }: { fieldName: string }) {
    return <FormError text={`The only valid ${fieldName} is admin`} />
  }

  function FormError({ text }: { text: string }) {
    return (
      <div role="alert" aria-live="polite">
        <span role="img" aria-label="Error">
          ⚠️
        </span>
        {text}:
      </div>
    )
  }
}

function LoginButton() {
  return (
    <button
      type="submit"
      className={classNames(
        "mt-4 rounded-lg bg-yellow-400 p-2 font-bold uppercase",
        BUTTON_HEIGHT
      )}
    >
      Login
    </button>
  )
}
