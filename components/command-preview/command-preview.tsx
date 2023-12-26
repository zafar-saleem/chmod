import React from "react";
import * as Styled from "./command-preview.styles";

export const CommandPreview = ({ ...props }) => {
  const [text, copyText] = React.useState(`chmod ${props.read}${props.write}${props.execute} filename`);
  const [isCopied, updateCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    updateCopied(true);
    setTimeout(() => {
      updateCopied(false);
    }, 5000);
  };

  return (
    <>
      <Styled.CommandPreview onClick={handleCopy} title="Click to copy">{text}</Styled.CommandPreview>
      {isCopied && <span>Copied to clipboard</span>}
    </>
  )
}