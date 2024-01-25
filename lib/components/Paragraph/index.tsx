import React from 'react';

export interface ParagraphProps extends React.HTMLProps<HTMLElement> {
  text?: string;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <p className={`${props?.className} font-medium text-md py-4 `}>
      {props?.text}
    </p>
  );
};

export default Paragraph;
