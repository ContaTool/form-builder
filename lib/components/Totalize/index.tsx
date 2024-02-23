import React from 'react';

import { TotalizerContextProvider } from '../../context/TotalizerContext';
import Totalize from './Totalize';

const TotalizeWrapper = (props) => (
  <TotalizerContextProvider>
    <Totalize {...props} />
  </TotalizerContextProvider>
);

export default TotalizeWrapper;
