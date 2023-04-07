import React from "react";

import useInput from "../hooks/use-input";
import Button from "../UI/button";
import Card from "../UI/Card";

const Form = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

  // const nameInputClasses = nameInputHasError ? "invalid" : "bg-black";

  return (
    <Card className="w-[80%] md:w-[50%] lg:w-[30%] m-auto mt-24 p-4">
      <form onSubmit={formSubmissionHandler} className="flex flex-col">
        <h1 className="mb-4 text-center text-Mangolia text-sm md:text-xl lg:text-xl font-semibold">
          SIGN IN TO YOUR ACCOUNT
        </h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-Marine-blue font-bold">
            Name
          </label>
          <input
            className="text-Marine-blue font-semibold mt-2 mb-4 px-4 py-2 rounded-[5px] bg-Light-gray focus:outline-none"
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="text-Strawberry-red">Name must not be empty</p>
          )}
          </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-Marine-blue font-bold">
            Email
          </label>
          <input
            className="text-Marine-blue font-semibold mt-2 mb-4 px-4 py-2 rounded-[5px] bg-Light-gray focus:outline-none"
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

        {/* <Button disabled={!formIsValid} onClick={formSubmissionHandler}>SIGN IN</Button> */}

        <div>
          <button disabled={!formIsValid} className="w-[100%] bg-Purplish-blue text-center text-xl text-White py-2 rounded-[5px] hover:bg-Marine-blue cursor-pointer">SIGN IN</button>
        </div>

        <a href="#" className="flex text-center mx-auto my-2">
          Forgot your password?
        </a>
      </form>
    </Card>
  );
};

export default Form;
