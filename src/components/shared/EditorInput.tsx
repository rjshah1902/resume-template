import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function EditorInput(props: Props) {
  return (
    <input className="text-black p-2 w-full rounded-sm text-sm" {...props} />
  );
}
