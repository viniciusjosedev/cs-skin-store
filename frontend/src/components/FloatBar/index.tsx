interface FloatBarProps {
  floatValue: string;
}

const FloatBar = ({ floatValue }: FloatBarProps) => {
  const float = parseFloat(floatValue);
  const minFloat = 0;
  const maxFloat = 1;
  const normalizedFloat = Math.min(Math.max(float, minFloat), maxFloat);
  
  const indicatorPosition = ((normalizedFloat - minFloat) / (maxFloat - minFloat)) * 100;

  return (
    <div className="relative w-full h-4 bg-gray-700 rounded">
      <div
        className="absolute inset-0 rounded"
        style={{
          background: 'linear-gradient(90deg, #00ff00, #ffff00, #ff8000, #ff0000)',
        }}
      />
      
      <div
        className="absolute top-0 left-0 h-full w-1 bg-white"
        style={{
          left: `${indicatorPosition}%`,
          transform: 'translateX(-50%)',
        }}
      >
        <div
          className="absolute -top-1 left-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-white border-b-[6px] border-b-white"
          style={{
            transform: 'translateY(-100%)',
          }}
        />
      </div>
    </div>
  );
};

export default FloatBar;
