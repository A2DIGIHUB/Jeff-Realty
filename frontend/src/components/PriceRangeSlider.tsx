import React from 'react';
import { Slider } from '@mui/material';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChange(newValue as [number, number]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="mt-1 text-sm text-gray-500">
            {formatPrice(value[0])} - {formatPrice(value[1])}
          </div>
        </div>
      </div>
      <div className="px-2 py-4">
        <Slider
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          valueLabelDisplay="auto"
          sx={{
            color: '#10b981',
            '& .MuiSlider-thumb': {
              backgroundColor: '#10b981',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#10b981',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#d1d5db',
            },
          }}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
