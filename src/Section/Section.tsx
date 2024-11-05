import {forwardRef} from "react";
import "./Section.css";

type SectionProps = {
  title: string;
  content: React.ReactNode;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({title, content}, ref) => {
    return (
      <section ref={ref} className="section">
        <h1>{title}</h1>
        <div>{content}</div>
      </section>
    );
  },
);
