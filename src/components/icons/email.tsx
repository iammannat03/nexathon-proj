import React from "react";

export const EmailIcon = () => {
    return (
        <svg className="flex-shrink-0 inline w-6 h-6 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24">
            <mask id="lineMdEmailCheck0">
                <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path strokeDasharray={64} strokeDashoffset={64}
                          d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                    </path>
                    <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                                 values="24;0"></animate>
                    </path>
                    <path fill="#000" fillOpacity={0} stroke="none"
                          d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z">
                        <set fill="freeze" attributeName="fill-opacity" begin="0.8s" to={1}></set>
                    </path>
                    <path strokeDasharray={10} strokeDashoffset={10} d="M16 19l1.75 1.75l3.75 -3.75">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s"
                                 values="10;0"></animate>
                    </path>
                </g>
            </mask>
            <rect width={24} height={24} fill="currentColor" mask="url(#lineMdEmailCheck0)"></rect>
        </svg>
    );
};