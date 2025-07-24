import React, { useState } from 'react';

export default function useClipboard(){
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    if(!navigator.clipboard){
      console.warn('Clipboard API not supported');
      return
    }
    navigator.clipboard.writeText(text)
    .then(()=> setCopied(true))
    .catch(()=> setCopied(false))

    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }
  return {copyToClipboard, copied};
}