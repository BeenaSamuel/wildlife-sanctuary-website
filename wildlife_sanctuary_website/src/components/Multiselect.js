
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function ChipsDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'Water creatures', code: 'NY' },
        { name: 'Polar animals', code: 'RM' },
        { name: 'bird lookouts', code: 'LDN' },
        { name: 'reptilia land', code: 'IST' },
        { name: 'Ferocious colony', code: 'PRS' }
    ];

    return (
       <div>
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" display="chip" 
                placeholder="Select places to visit" maxSelectedLabels={3}  />
        </div>
    );
}
        