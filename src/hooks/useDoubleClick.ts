import { useRef } from "react";

export default function useDoubleClick(callback: Function) {
  let clickDate: Date | undefined;

  return (...params: any[]) => {
    if (!clickDate) {
      clickDate = new Date();
    } else {
      if (new Date().getTime() - clickDate.getTime() < 700) {
        callback(...params);
      }

      clickDate = undefined;
    }
  };
}
