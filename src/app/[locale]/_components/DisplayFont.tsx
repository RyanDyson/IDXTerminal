import React from "react";
import { Instrument_Serif } from "next/font/google";
import {
  type NextFontWithVariable,
  type NextFont,
} from "next/dist/compiled/@next/font";

interface displayProps extends React.HTMLProps<HTMLDivElement> {
  font?: NextFont | NextFontWithVariable;
  italic?: boolean;
}
const ist = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export function DisplayFont(props: displayProps) {
  return (
    <div style={ist.style} {...props}>
      {props.children}
    </div>
  );
}
