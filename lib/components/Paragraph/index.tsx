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
      className={`${baseStyles} m-0 p-0 font-medium text-md`}
    >
      {props.props.text}
    </p>
  );
};

export default Paragraph;
