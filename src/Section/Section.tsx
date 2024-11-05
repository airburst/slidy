import {Text, TextField} from "@simplybusiness/mobius";
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
        <Text elementType="h1">{title}</Text>
        <div>
          <TextField aria-label="Content" placeholder={title} />
          <Text>{content}</Text>
        </div>
      </section>
    );
  },
);
