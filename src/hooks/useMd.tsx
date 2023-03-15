import useMediaQuery from './useMediaQuery';

// This hook corresponds to the md breakpoint in tailwind
const useMd = () => {
  return useMediaQuery('(min-width: 768px)');
};

export default useMd;
