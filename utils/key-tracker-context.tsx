import { createContext, useContext, useEffect, useState } from 'react';

export type KeyTracker = {
  meta: boolean;
  shift: boolean;
  k: boolean;
};

const KeyTrackerContext = createContext<KeyTracker>(null);

export const KeyTrackerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [keyStatus, setKeyStatus] = useState<KeyTracker>({
    meta: false,
    shift: false,
    k: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeyStatus({
        meta: e.metaKey,
        shift: e.shiftKey,
        k: e.key === 'k',
      });
    };

    const handleKeyUp = (e) => {
      setKeyStatus({
        meta: e.metaKey,
        shift: e.shiftKey,
        k: e.key === 'k',
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <KeyTrackerContext.Provider value={keyStatus}>
      {children}
    </KeyTrackerContext.Provider>
  );
};

export const useKeyTracker = () => {
  const context = useContext(KeyTrackerContext);
  if (!context) {
    throw new Error(`useKeyTracker must be used within the KeyTrackerProvider`);
  }
  return context;
};
