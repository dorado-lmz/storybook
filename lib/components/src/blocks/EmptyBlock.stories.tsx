import React from 'react';
import { EmptyBlock } from './EmptyBlock';
import { DocsPageWrapper } from './DocsPage';

export default {
  title: 'Docs|EmptyBlock',
  component: EmptyBlock,
  decorators: [getStory => <DocsPageWrapper>{getStory()}</DocsPageWrapper>],
};

export const error = () => <EmptyBlock>Generic error message</EmptyBlock>;
