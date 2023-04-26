import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-8 text-3xl font-bold">Get In Touch</h2>
        <p className="text-lg text-gray-200">
          Have a question or want to work together? Feel free to send me an
          email at{" "}
          <a
            href="mailto:hello@patrickfender.com"
            className="text-indigo-400 hover:text-indigo-300"
          >
            hello@patrickfender.com
          </a>
          .
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <a href="mailto:hello@patrickfender.com">
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-10 py-5 text-center text-lg font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="pe-2" />
            Send E-Mail
          </button>
        </a>
      </div>
    </>
  );
}
