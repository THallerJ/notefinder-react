import { useEffect, useRef } from 'react';
/**
 * This hook copies a state into a ref.
 *
 * @param state - The state that is copied into a ref
 * @returns - A ref to the state
 */
const useCopyRef = <T,>(state: T) => {
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};
export default useCopyRef;
