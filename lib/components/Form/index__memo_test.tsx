import React, { useMemo, useState } from 'react';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Card from '../Card';

export interface FormProps {}

const Form = (props: FormProps) => {
  console.log('render form', props);

  const [number, setNumber] = useState(0);
  // const memoizedProps = useMemo(() => (), []);

  return (
    <div>
      {/* <SubTitle type={`subtitle`} props={{ size: 0 }} /> */}
      <Card type="card" props={{}}>
        <Title type="title" props={{ label: 'Form' }} />
      </Card>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default Form;
