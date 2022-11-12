import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { letterContainerVariants, letterVariants } from "./WavyVariants";
const StyledTitleElement = styled(motion.h2) `
  font-size: 3rem;
  line-height: 1;

  font-family: serif;
  text-transform: uppercase;
  text-size: 

  position: relative;
  display: inline-block;
  max-width: 100%;

  word-break: break-word;
  z-index: 10;
  color:  #08fdd8;
`;
export const WavyText = (props) => {
    const { children, currentInView } = props;
    return (React.createElement(AnimatePresence, null, currentInView && (React.createElement(StyledTitleElement, Object.assign({}, props, { variants: letterContainerVariants, initial: "before", animate: "after", exit: "before", key: children, "aria-label": children, "aria-live": "polite" }), children.split(" ").map((word, wordI) => (React.createElement("div", { key: `word-${word}-${wordI}`, style: {
            display: "inline-block"
        } },
        Array.from(word).map((letter, index) => (React.createElement(motion.span, { key: `${index}-${letter}`, style: {
                position: "relative",
                display: "inline-block",
                width: "auto"
            }, variants: letterVariants }, letter === " " ? "\u00A0" : letter))),
        "\u00A0")))))));
};