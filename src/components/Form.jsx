import React from "react";

import Button from "../UI/button";
import Card from "../UI/Card";

const Form = () => {
  return (
    <Card className="w-[80%] md:w-[50%] lg:w-[30%] m-auto mt-36 p-4">
      <form className="flex flex-col">
        <h1 className="mb-4 text-center text-Mangolia text-sm md:text-xl lg:text-xl font-semibold">
          SIGN IN TO YOUR ACCOUNT
        </h1>

        {/* <label htmlFor="name" className="text-Marine-blue font-bold">
          Name
        </label> */}
        <input
          className="text-Marine-blue font-semibold mt-2 mb-4 px-4 py-2 rounded-[5px] bg-Light-gray focus:outline-none"
          type="text"
          id="name"
        />

        {/* <label htmlFor="email" className="text-Marine-blue font-bold">
          Email
        </label> */}
        <input
          className="text-Marine-blue font-semibold mt-2 mb-4 px-4 py-2 rounded-[5px] bg-Light-gray focus:outline-none"
          type="email"
          id="email"
        />

        <div className="my-6">
          <input type="checkbox" className="mr-4" />
          <label className="text-gray">Keep me signed in</label>
        </div>

        <Button>SIGN IN</Button>

        <a href="#" className="text-center my-2">Forgot your password?</a>
      </form>
    </Card>
  );
};

export default Form;
