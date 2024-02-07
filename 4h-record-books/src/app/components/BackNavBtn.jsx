"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { MdArrowBack } from "react-icons/md";


function BackNavBtn() {
  const router = useRouter();

  function handleClick() {
    router.back(); // Navigates one step back in the browser history
  }

  return (
    <button type="button" onClick={handleClick} className='actionBarBack'>
      <MdArrowBack />
    </button>
  );
}

export default BackNavBtn;
