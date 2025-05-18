import { useEffect, useRef } from "react";
import "./Timeline.css";
import { Booking } from "./Booking";
import { Match } from "./Match";
import { BouyguesTelecom } from "./BouyguesTelecom";
import { DassaultSystemes } from "./DassaultSystemes";

const TimelineText = ({ textTitle, textDate, text, textRole }) => {
  return (
    <div className="p-[1rem] relative rounded-sm bg-[#121212C5]">
      <h3 className="mt-[0.5rem] text-2xl pb-4">{textTitle}</h3>
      <div className="text-sm pb-4">
        {textDate} <span className="italic"> - {textRole}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export const Timeline = () => {
  const timelineRef = useRef(null);
  const hasReachedBottom = useRef(false);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    const updateTimelineHeight = () => {
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we've scrolled past the timeline bottom
      if (rect.bottom <= windowHeight) {
        hasReachedBottom.current = true;
      } else if (rect.top > 0) {
        hasReachedBottom.current = false;
      }

      // Calculate progress
      let progress;
      if (hasReachedBottom.current) {
        progress = 1; // Stay at 100% after passing bottom
      } else {
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        progress = Math.min(1, Math.max(0, visibleHeight / rect.height));
      }

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
      <div className="timeline-item">
        <div className="svg-container bg-[#0d3474]">
          <Booking />
        </div>
        <TimelineText
          textTitle="Booking.com"
          textRole="Engineering Manager"
          textDate="2022-Present"
          text={`Managing the platform of Booking.com website (modernization, cataloging, tech tooling)`}
        />
      </div>
      <div className="timeline-item">
        <div className="svg-container bg-[#1d0e31]">
          <Match />
        </div>
        <TimelineText
          textTitle="MatchGroup"
          textRole="Director of Engineering"
          textDate="2021-2022"
          text={`blabla about Booking.com Lorem ipsum dolor,
         sit amet consectetur adipisicing elit. Dicta necessitatibus exercitationem, rerum alias deleniti dolores.`}
        />
      </div>
      <div className="timeline-item">
        <div className="svg-container bg-white">
          <BouyguesTelecom />
        </div>
        <TimelineText
          textTitle="Bouygues Telecom"
          textDate="2019-2021"
          textRole="Apps Manager"
          text={`Bouygues Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aut accusamus eaque dicta quod nulla fugit odio perferendis
            dignissimos modi tempora?`}
        />
      </div>
      <div className="timeline-item">
        <div className="svg-container bg-[#095077]">
          <DassaultSystemes />
        </div>
        <TimelineText
          textTitle="Dassault Systèmes"
          textRole="Team Lead"
          textDate="2014-2019"
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit
            eum unde aspernatur deserunt ullam aliquam nemo veritatis ea quis?`}
        />
      </div>
    </div>
  );
};
