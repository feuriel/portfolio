import React from "react";

const FAQSection = ({ title, description }) => {
  return (
    <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="pt-4">{description}</p>
    </details>
  );
};

export const FAQ = () => {
  return (
    <div>
      <h3>Want to know even more ?</h3>
      <div className="flow-root">
        <div className="my-4 flex flex-col divide-y divide-gray-700">
          <FAQSection
            title={
              "How do you inspire teams ? Motivational posters ? Free snacks?"
            }
            description={`Yes to snacks. But mostly by turning problems into puzzles - because who doesn't love a good challenge ?`}
          />
          <FAQSection
            title={"What's your secret for UI/UX passion ?"}
            description={`A mix of (tons of) google search, and art. I'll stare at a button like it owes me money until I figure out why it feels off - then rapid-sketch alternatives. Practice (and iteration) makes perfect. This is also true for system architecture design.`}
          />
          <FAQSection
            title={
              "React, Vue, Svelte… Which JS framework do you actually like ?"
            }
            description={
              "I flirt with them all, but my heart still go towards Vanilla js. Call me old-school, but I like knowing how my tools work, not just how to assemble IKEA instructions. "
            }
          />
          <FAQSection
            title={"What's the most underrated skill in tech leadership ?"}
            description={
              "Asking dumb questions. If I don't understand something within 30 seconds, neither will your users."
            }
          />
          <FAQSection
            title={"What's your secret for UI/UX passion ?"}
            description={"Knowing that the question was already answered."}
          />
          <FAQSection
            title={
              "Everyone's chasing 'cutting-edge' solutions, what's your take ?"
            }
            description={
              "Simplicity is the new complexity. I appreciate systems that are so simple that they just seem lazy."
            }
          />
        </div>
      </div>
    </div>
  );
};
