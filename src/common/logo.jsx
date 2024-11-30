import React  from 'react';


export default function Logo({ dim, color = "#660466" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 75" height={dim} width={dim}>
            <path d="M5 70L40 50A20 20 1 1 0 20 50A3 3 1 1 1 25 50ZM30 40A5 5 1 1 0 29 40z"
                stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="3"/>
        </svg>
    )
}
