import React from "react";

import Card from "../UI/Card";

const Form = () => {
  return (
    <Card className="w-[30%] m-auto mt-36 p-4">
      <form className="flex flex-col">
        <h1 className="mb-4 text-center text-Mangolia text-xl">
          SIGN IN TO YOUR ACCOUNT
        </h1>

        <label htmlFor="name" className="text-Marine-blue font-bold">
          Name
        </label>
        <input
          className="mt-2 mb-4 px-4 py-2 rounded-[5px] border-2 border-Light-gray focus:outline-Marine-blue text-Marine-blue font-semibold"
          type="text"
          id="name"
        />

        <label htmlFor="email" className="text-Marine-blue font-bold">
          Email
        </label>
        <input
          className="mt-2 mb-4 px-4 py-2 rounded-[5px] border-2 border-Light-gray focus:outline-Marine-blue text-Marine-blue font-semibold"
          type="email"
          id="email"
        />
      </form>
    </Card>
  );
};

export default Form;
