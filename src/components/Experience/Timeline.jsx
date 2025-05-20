import { useEffect, useRef } from "react";
import "./Timeline.css";
import { Booking } from "./Booking";
import { Match } from "./Match";
import { BouyguesTelecom } from "./BouyguesTelecom";
import { DassaultSystemes } from "./DassaultSystemes";
import { motion as MOTION } from "framer-motion";

const TimelineText = ({ textTitle, textDate, textRole, children }) => {
  return (
    <div className="p-[1rem] relative rounded-sm bg-[#121212C5]">
      <h3 className="mt-[0.5rem] text-2xl pb-4">{textTitle}</h3>
      <div className="text-sm pb-4">
        {textDate} <span className="italic"> - {textRole}</span>
      </div>
      {children}
    </div>
  );
};

const TimelineItem = ({ children }) => {
  return (
    <MOTION.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="timeline-item"
    >
      {children}
    </MOTION.div>
  );
};

export const Timeline = () => {
  const timelineRef = useRef(null);
  // const hasReachedBottom = useRef(false);
  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    const updateTimelineHeight = () => {
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const earlyCompletionOffset = 50; // pixels

      // Calculate visible portion between:
      // - top entering viewport (progress = 0) (rect.top <= windowHeight)
      // - bottom entering viewport (progress = 1) (rect.bottom <= windowHeight)
      const progress = Math.min(
        1,
        Math.max(
          0,
          (windowHeight - rect.top - earlyCompletionOffset) / elementHeight
        )
      );

      timelineElement.style.setProperty(
        "--timeline-height",
        `${progress * 100}%`
      );
    };

    window.addEventListener("scroll", updateTimelineHeight, { passive: true });
    window.addEventListener("resize", updateTimelineHeight);
    updateTimelineHeight();

    return () => {
      window.removeEventListener("scroll", updateTimelineHeight);
      window.removeEventListener("resize", updateTimelineHeight);
    };
  }, []);

  return (
    <div
      ref={timelineRef}
      className="timeline relative"
      style={{ "--timeline-height": `0%` }}
    >
      <TimelineItem>
        <div className="svg-container bg-[#0d3474]">
          <Booking />
        </div>
        <TimelineText
          textTitle="Booking.com"
          textRole="Engineering Manager"
          textDate="2022-Present"
        >
          <p>
            At Booking, I am modernizing how the platform works behind the
            scenes, by building system models with clear ownership, by providing
            WebTools, Booking's internal tool for accelerating innovation, and
            giving tools for team to personalize the traveler's experience.
          </p>
        </TimelineText>
      </TimelineItem>
      <TimelineItem>
        <div className="svg-container bg-[#1d0e31]">
          <Match />
        </div>
        <TimelineText
          textTitle="MatchGroup"
          textRole="Director of Engineering"
          textDate="2021-2022"
        >
          <p>
            At MatchGroup, I was responsible for the whole tech of the brand
            Hawaya. I led the tech, ~20 engineers, in rebuilding the stack,
            while adding better tools to provide a faster and more robust
            working environment.
          </p>
        </TimelineText>
      </TimelineItem>
      <TimelineItem>
        <div className="svg-container bg-white">
          <BouyguesTelecom />
        </div>
        <TimelineText
          textTitle="Bouygues Telecom"
          textDate="2019-2021"
          textRole="Apps Manager"
        >
          <p>
            At Bouygues Telecom, I was defining solutions for field technicians,
            for helping their day-to-day work. From creating a fiber-optic
            installation verification app to building a 5G antenna diagnostics
            tool, I was responsible for the product and its delivery.
          </p>
        </TimelineText>
      </TimelineItem>
      <TimelineItem>
        <div className="svg-container bg-[#095077]">
          <DassaultSystemes />
        </div>
        <TimelineText
          textTitle="Dassault Systèmes"
          textRole="Team Lead"
          textDate="2014-2019"
        >
          <p>
            At Dassault Systèmes, I first contributed then led web applications
            for enterprise
            <span title="Product Lifecycle Management"> PLM </span> and
            portfolio governance. I helped create and implement new features for
            Enovia, including foundational web components that became part of
            Dassault Systèmes 3Experience platform.
          </p>
        </TimelineText>
      </TimelineItem>
    </div>
  );
};
