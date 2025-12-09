'use client';
import React from 'react';

export default function Search({ value = '', onChange, placeholder = 'Search...' }) {
    return (
        <div className="search-wrapper">
            <input
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-label="Search users"
            />
        </div>
    );
}
