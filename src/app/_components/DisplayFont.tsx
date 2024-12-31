import React from "react";
import { Lora } from "next/font/google";
import { NextFontWithVariable, NextFont } from "next/dist/compiled/@next/font";

interface displayProps extends React.HTMLProps<HTMLDivElement> {
  font?: NextFont | NextFontWithVariable;
}
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
});

export function DisplayFont(props: displayProps) {
  return (
    <div style={lora.style} {...props}>
      {props.children}
    </div>
  );
}
