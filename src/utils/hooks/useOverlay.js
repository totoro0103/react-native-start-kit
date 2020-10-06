import { useContext, useMemo } from 'react';
import { OVERLAY_DEFAULT_CONTEXT } from '../providers/OverlayProvider';

const useOverlay = () => {
  const overlayContext = useContext(OVERLAY_DEFAULT_CONTEXT);

  const overlay = useMemo(() => overlayContext, [overlayContext]);
  return overlay;
};

export default useOverlay;
