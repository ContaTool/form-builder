import React from 'react';
import useItem from '../../hooks/useItem';

interface ParagraphProps {
  text?: string;
}

const Paragraph = (props: NDataFormElement<ParagraphProps>) => {
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-medium text-md py-4 `}
    >
      {props.props.text}
    </p>
  );
};

export default Paragraph;
