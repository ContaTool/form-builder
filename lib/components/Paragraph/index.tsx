import React from 'react';

export interface ParagraphProps extends React.HTMLProps<HTMLElement> {
  text?: string;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <span className={`${props?.className} font-medium text-md py-4 `}>
      {props?.text}
    </span>
  );
};

export default Paragraph;
