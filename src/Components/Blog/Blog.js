import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-100 px-4">
      <div className="md:w-2/5 mx-auto py-16">
        <div className="hover:bg-primary p-3 hover:shadow-2xl hover:text-white hover:ease-in duration-200">
          <h2 className="text-2xl font-bold">what is cors?</h2>
          <br />

          <p>
            Cross-origin resource sharing (CORS) is a browser security feature
            that restricts cross-origin HTTP requests that are initiated from
            scripts running in the browser. If your REST API's resources receive
            non-simple cross-origin HTTP requests, you need to enable CORS
            support.
          </p>
          <br />
        </div>

        <div className="hover:bg-primary p-3 hover:shadow-2xl hover:text-white hover:ease-in duration-200">
          <h2 className="text-2xl font-bold">Why are you using firebase?</h2>
          <br />
          <p>
            Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and
            backend services, it is possible to set up the whole authentication
            process in just a couple of minutes. Firebase allows users to
            authenticate with their phone number, email, Google, and Facebook
            accounts
          </p>
          <br />
        </div>
        <div className="hover:bg-primary p-3 hover:shadow-2xl hover:text-white hover:ease-in duration-200">
          <h2 className="text-2xl font-bold">
            What other options do you have to implement authentication?
          </h2>
          <br />
          <p>
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
            alternatives and competitors to Firebase Authentication.
          </p>
          <br />
        </div>
        <div className="hover:bg-primary p-3 hover:shadow-2xl hover:text-white hover:ease-in duration-200">
          <h2 className="text-2xl font-bold">
            How does the private route work?
          </h2>
          <br />
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in)
          </p>
          <br />
        </div>
        <div className="hover:bg-primary p-3 hover:shadow-2xl hover:text-white hover:ease-in duration-200">
          <h2 className="text-2xl font-bold">What is Node?</h2>
          <br />
          <p>
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. Node can,
            therefore, be used to write server-side applications with access to
            the operating system, file system, and everything else required to
            build fully-functional applications.
          </p>
          <br />
        </div>
        <div className="hover:bg-primary p-3 hover:shadow-2xl hover:text-white hover:ease-in duration-200">
          <h2 className="text-2xl font-bold">How does Node work?</h2>
          <br />
          <p>
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. Node can,
            therefore, be used to write server-side applications with access to
            the operating system, file system, and everything else required to
            build fully-functional applications.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Blog;
