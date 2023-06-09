import React from "react";

import Modal from "./Modal";
import useInput from "../hooks/use-input";
import Card from "../UI/Card";

const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const isNotEmpty = (value) => {
  const nameRegex = /[a-zA-Z]/;
  const name = value.trim();

  if (name.length < 3 || !nameRegex.test(name)) {
    return false;
  }

  return true;
};

const isEmail = (value) => emailRegex.test(value);

const Form = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    alert("Submitted successfully");
    console.log(enteredName);
    console.log(enteredEmail);
    
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "border-2 border-Strawberry-red text-Marine-blue font-semibold mt-2 mb-1 px-4 py-2 rounded-[5px] bg-error-red focus:outline-none"
    : "text-Marine-blue font-semibold mt-2 mb-1 px-4 py-2 rounded-[5px] bg-Light-gray focus:outline-none";

  const emailInputClasses = emailInputHasError
    ? "border-2 border-Strawberry-red text-Marine-blue font-semibold mt-2 mb-1 px-4 py-2 rounded-[5px] bg-error-red focus:outline-none"
    : "text-Marine-blue font-semibold mt-2 mb-1 px-4 py-2 rounded-[5px] bg-Light-gray focus:outline-none";

  return (
    <Card className="w-[80%] md:w-[50%] lg:w-[30%] m-auto mt-24 p-4">
      <form onSubmit={formSubmissionHandler} className="flex flex-col">
        <h1 className="mb-4 text-center text-Mangolia text-sm md:text-xl lg:text-xl font-semibold">
          SIGN IN TO YOUR ACCOUNT
        </h1>

        <div className="flex flex-col mb-3">
          <label htmlFor="name" className="text-Marine-blue font-bold">
            Name
          </label>
          <input
            className={nameInputClasses}
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="text-Strawberry-red leading-4">
              Please enter a valid name with at least 3 characters, including at
              least one alphabet.
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-Marine-blue font-bold">
            Email
          </label>
          <input
            className={emailInputClasses}
            type="email"
            id="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="text-Strawberry-red">
              Please provide a valid email address.
            </p>
          )}
        </div>

        <div className="my-6">
          <input type="checkbox" className="mr-4" />
          <label className="text-gray">Keep me signed in</label>
        </div>

        <div>
          <button
            disabled={!formIsValid}
            className="w-[100%] bg-Purplish-blue text-center text-xl text-White py-2 rounded-[5px] hover:bg-Marine-blue cursor-pointer"
          >
            SIGN IN
          </button>
        </div>

        <a href="#" className="flex text-center mx-auto my-2">
          Forgot your password?
        </a>
      </form>
    </Card>
  );
};

export default Form;
