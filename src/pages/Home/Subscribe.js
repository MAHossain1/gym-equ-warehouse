import React from "react";

const Subscribe = () => {
  return (
    <div class="hero  ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-4xl font-bold text-primary">Subscribe Now!</h1>{" "}
          <p class="py-6">
            The importance of cleanliness when it comes to commercial fitness
            equipment is often overlooked, but introducing and adhering to a
            regular cleaning programme is possibly one of the first and most
            important steps in prolonging the life of your equipment.
          </p>
          <p className="text-primary text-bold text-xl">
            Stay Connected With Us Subscribe to receive the latest fitness
            industry insights, product updates, event news, offers, and more.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-outline btn-primary">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
