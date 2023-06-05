import { useReducer, useState } from 'react';
import CodeBlock from '../components/code-block';
import Toggle from '../components/toggle';
import Save from '../components/icons/save';
import Saved from '../components/icons/saved';
import FeatureItem from '../components/feature-item';
import Cross from '../components/icons/cross';
import FeatureSystem from '../components/feature-system';
const IndexPage = () => {
  return (
    <div className='min-h-screen relative '>
      <FeatureSystem />
    </div>
  );
};

export default IndexPage;
