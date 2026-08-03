import { Fragment } from "react";

type TextLinesProps = {
  lines: string[];
};

export function TextLines({ lines }: TextLinesProps) {
  return lines.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}
