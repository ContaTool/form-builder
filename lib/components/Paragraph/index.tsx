import React from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';

interface ParagraphProps {
  text?: string;
}

const Paragraph = (props: NDataFormElement<ParagraphProps>) => {
  const { handleClick, baseStyles } = useBaseItem(props);

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
