type UseFretboardScaleClass = {
  scale: string;
};

const useFretboardScaleClass = ({ scale }: UseFretboardScaleClass) => {
  const getScaleClass = (): string => {
    const scaleNum = Number(scale);
    if (scaleNum === 100) return 'scale-100';
    if (scaleNum >= 90) return 'scale-95';
    if (scaleNum >= 80) return 'scale-90';
    if (scaleNum >= 70) return 'scale-[82%]';
    if (scaleNum >= 60) return 'scale-75';
    if (scaleNum >= 50) return 'scale-[60%]';
    if (scaleNum >= 40) return 'scale-50';
    if (scaleNum >= 30) return 'scale-[40%]';
    if (scaleNum >= 20) return 'scale-[32%]';
    if (scaleNum >= 10) return 'scale-[25%]';

    return 'scale-100';
  };

  return getScaleClass();
};

export default useFretboardScaleClass;
