'use client';

import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';

type Props = {
  children?: string;
  onHandleChange?: (name: string, value: string) => void;
  className?: string;
  dataId?: string;
  isArray?: boolean;
  onDelete?: (id: number) => void;
  arrayKey?: number;
  containerClassName?: string;
  placeholder?: string;
};

export default function EditorText({
  children,
  className,
  onHandleChange,
  dataId,
  isArray = false,
  arrayKey,
  placeholder,
  containerClassName,
  onDelete,
}: Props) {
  const [contextMenu, setContextMenu] = useState(false);
  const [showEditableField, setShowEditableField] = useState(false);
  const [isPlaceholderAdded, setIsPlaceholderAdded] = useState(false);

  return (
    <div
      className={`relative ${containerClassName ?? 'w-fit'}`}
      onMouseEnter={() => setContextMenu(true)}
      onMouseLeave={() => setContextMenu(false)}>
      {isArray && (
        <button
          onClick={() => {
            if (!isNaN(Number(arrayKey)) && onDelete) {
              console.log(arrayKey);
              onDelete(arrayKey!);
            }
          }}
          className={`${
            contextMenu ? 'block' : 'hidden'
          } absolute cursor-pointer active:scale-110 transition-all -top-[12px] -right-[25px] z-50 text-red-500 shadow-lg p-1 border bg-white rounded-full`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      )}
      <div
        onMouseDown={() => {
          setShowEditableField(true);
          if (onHandleChange && dataId && !isPlaceholderAdded) {
            onHandleChange(dataId, placeholder ?? '');
            setIsPlaceholderAdded(true);
          }
        }}
        onBlur={() => setShowEditableField(false)}>
        {children || showEditableField ? (
          <ContentEditable
            id={dataId}
            className={`${
              className ?? ''
            } editable-style break-words inline-block`}
            suppressContentEditableWarning={true}
            html={children ?? placeholder ?? ' '}
            onChange={(ev) => {
              if (onHandleChange) {
                onHandleChange((ev.currentTarget as any)?.id, ev.target.value);
              }
            }}
            tagName="p"
          />
        ) : (
          <p className={`${className} text-gray-700 italic font-normal`}>
            {placeholder}
          </p>
        )}
      </div>
    </div>
  );
}
