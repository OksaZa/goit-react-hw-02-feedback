import { SectionStyle } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      {title && <h2>{title}</h2>}
      {children}
    </SectionStyle>
  );
};
