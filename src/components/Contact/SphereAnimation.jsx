import React from "react";

//from https://codepen.io/leimapapa/pen/LEEqJyZ
export const SphereAnimation = () => {
  return (
    <div className="top-0 right-[-20%] absolute w-[40%] h-[40%]">
      <svg viewBox="-5 -5 110 110" strokeWidth="0">
        <g
          fill="none"
          id="sphere"
          transform="rotate(135 50 50)"
          strokeWidth="0"
          stroke="rgba(0,255,120,0.5)"
          filter="drop-shadow(0 0 1 rgba(255,255,255, 0.8))"
        >
          <ellipse cx="50" cy="3" rx="17" ry="4">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="0s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="0s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="6" rx="23.748684174075834" ry="4.4">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-0.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-0.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="10" rx="30" ry="4.84">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-0.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-0.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="14" rx="34.698703145794944" ry="5.324">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-0.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-0.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="18" rx="38.4187454245971" ry="5.8564">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-0.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-0.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="22" rx="41.42463035441595" ry="6.44204">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-1s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-1s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="26" rx="43.86342439892262" ry="7.086244">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-1.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-1.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="30" rx="45.8257569495584" ry="7.7948684">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-1.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-1.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="34" rx="47.37087712930805" ry="8.57435524">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-1.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-1.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="38" rx="48.53864439804639" ry="9.431790764">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-1.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-1.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="42" rx="49.35585071701226" ry="10.3749698404">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="46" rx="49.83974317750845" ry="11.41246682444">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-2.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-2.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="50" rx="50" ry="12.553713506884012">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-2.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-2.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="54" rx="49.83974317750845" ry="11.41246682444">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-2.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-2.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="58" rx="49.35585071701227" ry="10.3749698404">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-2.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-2.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="62" rx="48.53864439804639" ry="9.431790764">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-3s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-3s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="66" rx="47.37087712930804" ry="8.57435524">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-3.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-3.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="70" rx="45.825756949558404" ry="7.7948684">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-3.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-3.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="74" rx="43.86342439892262" ry="7.086244">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-3.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-3.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="78" rx="41.42463035441595" ry="6.44204">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-3.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-3.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="82" rx="38.4187454245971" ry="5.8564">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="86" rx="34.698703145794944" ry="5.324">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-4.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-4.2s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="90" rx="30" ry="4.84">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-4.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-4.4s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="94" rx="23.74868417407584" ry="4.4">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-4.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-4.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="96.75" rx="18" ry="3.5">
            <animate
              attributeName="stroke-width"
              values="0.1;1;0.1"
              dur="5s"
              begin="-4.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="5s"
              begin="-4.8s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
              keySplines="0.9 0 0.9 0; 0 0.9 0 0.9"
              calcMode="spline"
            ></animateTransform>
          </ellipse>
        </g>
      </svg>
    </div>
  );
};
