import { PortalContext } from "../contexts"; 
import { useCallback, useContext } from "react";

export const usePortal = () => {
  const { show, hide } = useContext(PortalContext);

  const open = useCallback(
    (component) => {
      show(component);
    },
    [show]
  );

  const close = useCallback(() => {
    hide();
  }, [hide]);

  return { open, close };
};
