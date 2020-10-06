import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  cloneElement,
} from 'react';

export const OVERLAY_DEFAULT_CONTEXT = createContext();
const EmptyDialog = () => <></>;

const { Provider } = OVERLAY_DEFAULT_CONTEXT;

const OverlayProvider = ({ children }) => {
  const [dialogContentNode, setDialogContentNode] = useState(EmptyDialog);
  const [open, setOpen] = useState(false);

  const show = useCallback((node) => {
    setDialogContentNode(node);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const val = useMemo(() => ([show, close]), [show, close]);

  return (
    <>
      <Provider value={val}>{children}</Provider>
      {cloneElement(dialogContentNode, { open, onClose: close })}
    </>
  );
};

export default OverlayProvider;
