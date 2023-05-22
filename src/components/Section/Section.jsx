import PropTypes from "prop-types";
import { Section } from "./Section.styled";


const FeedbackSection = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
}


FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export { FeedbackSection };
