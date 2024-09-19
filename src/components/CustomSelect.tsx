"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing React Icons

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className={`select-selected ${isOpen ? 'select-arrow-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find(option => option.value === selectedValue)?.label || 'Select an option'}
        {isOpen ? <FaChevronUp className="select-arrow-icon" /> : <FaChevronDown className="select-arrow-icon" />}
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={option.value === selectedValue ? 'same-as-selected' : ''}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
