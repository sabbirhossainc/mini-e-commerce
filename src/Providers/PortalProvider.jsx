import { useState } from "react";
import { createPortal } from "react-dom";
import { PortalContext } from "../contexts";

const PortalProvider = ({ children }) => {
  const [portalContent, setPortalContent] = useState(null);

  const show = (content) => setPortalContent(content);
  const hide = () => setPortalContent(null);

  return (
    <PortalContext.Provider value={{ show, hide }}>
      {children}
      {portalContent &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-50 min-h-screen use-backdrop">
            {portalContent}
          </div>,
          document.body
        )}
    </PortalContext.Provider>
  );
};

export default PortalProvider;
