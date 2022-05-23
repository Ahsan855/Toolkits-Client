import React from "react";

const Contact = () => {
  return (
    <div class="hero min-h-screen bg-secondary">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left ml-20">
          <h1 class="text-5xl font-bold text-primary">Please Join !</h1>
          <p class="py-6 w-3/4 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white">More..</button>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-primary text-3xl mt-3 text-center font-bold">Join</div>
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="type name"
                class="input input-bordered"
              />
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <span class="label-text">Number</span>
              </label>
              <input
                type="text"
                placeholder="Number"
                class="input input-bordered"
              />
              
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary text-white">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
