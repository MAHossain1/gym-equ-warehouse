import React from "react";
import articleimg from "../../banner/articleimg.jpg";

const WhyGymNeed = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={articleimg}
          className="max-w-sm w-80 rounded-lg shadow-2xl"
          alt="safety_img"
        />
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Top Reasons Why Workout Gear and Equipment Is So Important
          </h1>
          <p className="text-3xl py-5">Our amazing tips for taking Exercise</p>
          <p className="text-xl">
            When it comes to exercises, everyone has different preferences. Some
            prefer easy walking or jogging, which requires no gear or equipment,
            other than good running shoes. Others like to use hand-held weights,
            and still, others prefer full gym equipment for their daily workout
            routines.
          </p>
          <ul className="mb-5">
            <li>
              <b>1. Better Control</b> When joints and muscles are overworked
              due to extreme exercise, the body tires easily. Using a proper gym
              machine will help avoid injury. By controlling the path of motion
              and matching the amount of force to the strength of muscles, the
              body gets a more efficient and safe workout.
            </li>
            <li>
              <b>2. Better Resistance</b> For those who want to gain optimal
              muscle strength, bodyweight exercises aren’t necessarily enough,
              especially if the goal is to increase muscle mass and size.
              External resistance is required, which enables the person to
              improve their strength and achieve the desired outcome. Proper
              equipment and exercise machines allow for adjustable weights and
              sizes, depending on the person’s ability and stamina.
            </li>
            <li>
              <b>3. Better Time Efficiency</b> A variation of gear and equipment
              enables people who want to improve their body the chance to have
              efficient circuit training. This is when they perform transitional
              exercises with minimal rest in-between sets. Having equipment such
              as machines, kettlebells, and stationary bikes make it easy to
              design personalized programs and get the most out of one’s limited
              time or schedule.
            </li>
          </ul>
          <button className="btn btn-outline btn-primary">Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default WhyGymNeed;
