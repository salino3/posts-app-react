import React from 'react';
import { CreatePostScene } from '@/scenes';
import * as classes from './create-post.styles';

export const CreatePostLayout: React.FC = () => {
  return (
    <div className={classes.root}>
        <CreatePostScene />
    </div>
  )
}
