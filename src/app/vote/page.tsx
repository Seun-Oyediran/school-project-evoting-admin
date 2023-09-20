'use client';
import { Button } from '@/components';
import React from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  return (
    <div>
      <p>I am vote page</p>
      <div>
        <Button
          onClick={() => {
            toast('I AM A GOD!!!!');
          }}
        >
          Click me
        </Button>
      </div>
    </div>
  );
};

export default Page;
