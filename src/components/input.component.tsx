'use client';

import React, { forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: React.ComponentProps<'input'>['type'];
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, type = 'text', ...inputProps },
  ref,
) {
  return (
    <div className="mb-4">
      <input className="w-full border-0  rounded px-4 py-2" {...inputProps} ref={ref} type={type} />
      {error && <div className="text-white">{error}</div>}
    </div>
  );
});

export default Input;
