interface AdPlaceholderProps {
  type?: 'horizontal' | 'vertical' | 'square';
  className?: string;
}

export default function AdPlaceholder({ type = 'horizontal', className = '' }: AdPlaceholderProps) {
  const heights = {
    horizontal: 'h-24',
    vertical: 'h-96',
    square: 'h-64',
  };

  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${heights[type]} ${className}`}
    >
      <div className="text-center text-gray-400">
        <p className="text-sm font-medium">Ad Space</p>
        <p className="text-xs">Adsterra / AdSense</p>
      </div>
    </div>
  );
}
