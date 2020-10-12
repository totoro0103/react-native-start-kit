import React from 'react';

import { PricingCard } from 'react-native-elements';
import colors from '../../themes/colors';

const Search = () => (
  <PricingCard
    color={colors.primary}
    title="Free"
    price="$0"
    info={['1 User', 'Basic Support', 'All Core Features']}
    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
  />

);

export default Search;
