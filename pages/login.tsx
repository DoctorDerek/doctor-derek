import Link from "next/link"
import { Router, useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form"

import GlobalStateContext from "@/components/GlobalStateContext"
import UserAuthComponent from "@/components/UserAuthComponent"
import authMachine, {
  LOCALSTORAGE_KEY_AUTH,
  validateHashToken,
} from "@/utils/authMachine"
import { useActor } from "@xstate/react"

type LoginFormValues = {
  email: string
  password: string
}

const classNames = (...rest: string[]) => rest.join(" ")
const BUTTON_HEIGHT = "h-15" // height: 3.75rem /* 60px */;

export default function Login() {
  // Grab next/router via its useRouter hook, so we can redirect after login.
  const router = useRouter()

  // Retrieve our loggedIn/loggedOut status from the global context with xState:
  const globalServices = useContext(GlobalStateContext)
  const [state] = useActor(globalServices.authService)
  const isLoggedIn = state.matches("loggedIn")
  const { send } = globalServices.authService

  // Set up our form handlers using react-hook-form:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()
  const onSubmit: SubmitHandler<LoginFormValues> = ({ email, password }) => {
    // We'll log the user in via global context using our XState authMachine.
    send("LOG_IN", { authorizedUser: email })
    // Note: We already know we have admin/admin because of the form validation.
    console.log(`Attempting login with ${email}/${password} credentials...`)
    router.push("/")
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
      <UserAuthComponent />
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
