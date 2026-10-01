import React from 'react';

export interface TechIconProps {
  id: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ id, className = "w-7 h-7" }) => {
  switch (id) {
    case 'c-lang':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M115.4 30.7L66.7 2.6c-1.7-1-3.7-1-5.4 0L12.6 30.7c-1.7 1-2.7 2.7-2.7 4.7v56.2c0 2 1.1 3.7 2.7 4.7l48.7 28.1c1.7 1 3.7 1 5.4 0l48.7-28.1c1.7-1 2.7-2.7 2.7-4.7V35.4c0-2-1-3.7-2.7-4.7z" fill="#00599C" />
          <path d="M64 94c-16.5 0-30-13.5-30-30s13.5-30 30-30c9.1 0 17.2 4.1 22.7 10.5l-9.8 8.4C73.3 48.7 68.9 46 64 46c-9.9 0-18 8.1-18 18s8.1 18 18 18c4.9 0 9.3-2.7 12.9-6.9l9.8 8.4C81.2 89.9 73.1 94 64 94z" fill="#FFFFFF" />
        </svg>
      );

    case 'cpp-lang':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M115.4 30.7L66.7 2.6c-1.7-1-3.7-1-5.4 0L12.6 30.7c-1.7 1-2.7 2.7-2.7 4.7v56.2c0 2 1.1 3.7 2.7 4.7l48.7 28.1c1.7 1 3.7 1 5.4 0l48.7-28.1c1.7-1 2.7-2.7 2.7-4.7V35.4c0-2-1-3.7-2.7-4.7z" fill="#004482" />
          <path d="M52 86c-12.2 0-22-9.8-22-22s9.8-22 22-22c6.7 0 12.7 3 16.7 7.7l-7.2 6.2C58.8 52.8 55.6 51 52 51c-7.2 0-13 5.8-13 13s5.8 13 13 13c3.6 0 6.8-1.8 9.5-4.9l7.2 6.2C64.7 83 58.7 86 52 86z" fill="#FFFFFF" />
          <path d="M78 59h6v-6h4v6h6v4h-6v6h-4v-6h-6v-4zM96 59h6v-6h4v6h6v4h-6v6h-4v-6h-6v-4z" fill="#FFFFFF" />
        </svg>
      );

    case 'java':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none">
          <path d="M26.2 46.8c-7.2-.5-13.4 1.3-13.4 1.3s2.6-1.5 7.6-2.5c5-1 9.9-.7 15.6-.2 7 .6 15 .2 20.3-2.1 0 0-2.3 1.8-8.5 2.7-7.3 1.1-14.4 1.3-21.6.8z" fill="#EA2D2E" />
          <path d="M24 38.6c-5.8-.4-10.8 1.1-10.8 1.1s2.1-1.2 6.2-2c4.1-.8 8-.6 12.7-.2 5.7.5 12.2.2 16.5-1.7 0 0-1.9 1.5-6.9 2.2-5.9.9-11.8 1-17.7.6z" fill="#E76F00" />
          <path d="M37.3 22.8c2.4 2.8 1.6 5.3 1.6 5.3s3.4-3.5 1.5-6.8c-2-3.4-6.4-5.1-6.4-5.1s2 1.8 3.3 6.6z" fill="#007396" />
          <path d="M43.8 28.5c4.7 4.1 1.7 10.2 1.7 10.2s5.3-4.9 1.4-10.6c-3.9-5.7-9.4-7.5-9.4-7.5s4 3 6.3 7.9z" fill="#EA2D2E" />
          <path d="M34.5 53.6c-13.4 0-21.8 1.4-21.8 1.4s4.2-.8 12.8-1.3c8.6-.5 18.2-.3 27.5-.9 0 0-4.7.8-18.5.8z" fill="#007396" />
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 110 110" fill="none">
          <path d="M54.5 3c-25.5 0-24 11-24 11l.03 11.4h24.5v3.4H20.7S3 26.6 3 52.5c0 25.8 15.4 25 15.4 25h9.2v-12.8s-.5-15.4 15.1-15.4h24.2s14.4.2 14.4-14.1V17.4S98.2 3 54.5 3zM37.4 10.7c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" fill="#387EB8" />
          <path d="M55.5 107c25.5 0 24-11 24-11l-.03-11.4H54.9v-3.4h34.3s17.7 2.2 17.7-23.7c0-25.8-15.4-25-15.4-25h-9.2v12.8s.5 15.4-15.1 15.4H43.2s-14.4-.2-14.4 14.1v17.8S11.8 107 55.5 107zm17.1-7.7c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" fill="#FFE052" />
        </svg>
      );

    case 'html':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none">
          <path d="M71 460L32 0h448l-39 460-185 52z" fill="#E44D26" />
          <path d="M256 472l149-41 33-391H256v432z" fill="#F16529" />
          <path d="M256 176h-66l-4-49h70V79H133l13 145h110v-48zm0 157l-1 1-59-16-4-45h-49l7 89 106 29v-58zm0-157" fill="#EBEBEB" />
          <path d="M256 79v48h66l-6 71h-60v48h56l-5 59-51 14v50l93-26 13-145 2-19h-105V79z" fill="#FFFFFF" />
        </svg>
      );

    case 'css':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none">
          <path d="M71 460L32 0h448l-39 460-185 52z" fill="#1572B6" />
          <path d="M256 472l149-41 33-391H256v432z" fill="#33A9DC" />
          <path d="M256 176h-66l-4-49h70V79H133l13 145h110v-48zm0 157l-1 1-59-16-4-45h-49l7 89 106 29v-58zm0-157" fill="#EBEBEB" />
          <path d="M256 79v48h66l-6 71h-60v48h56l-5 59-51 14v50l93-26 13-145 2-19h-105V79z" fill="#FFFFFF" />
        </svg>
      );

    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 630 630" fill="none">
          <rect width="630" height="630" rx="120" fill="#F7DF1E" />
          <path d="M165 490c12 21 28 35 55 35 25 0 41-12 41-38V285h-52v200c0 10-4 15-12 15-7 0-11-4-15-12l-17 2zM325 485c15 25 40 40 76 40 43 0 71-22 71-55 0-30-18-44-55-58l-18-7c-21-8-30-16-30-28 0-12 10-21 27-21 16 0 28 6 36 21l22-14c-12-21-30-30-58-30-38 0-63 21-63 52 0 27 16 42 49 54l18 7c23 9 34 18 34 32 0 16-14 26-36 26-24 0-39-11-49-30l-24 11z" fill="#000000" />
        </svg>
      );

    case 'sql':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="14" rx="22" ry="7" fill="#0284C7" />
          <path d="M10 14v16c0 3.9 9.8 7 22 7s22-3.1 22-7V14" stroke="#0284C7" strokeWidth="4" fill="#38BDF8" fillOpacity="0.3" />
          <path d="M10 30v16c0 3.9 9.8 7 22 7s22-3.1 22-7V30" stroke="#0284C7" strokeWidth="4" fill="#38BDF8" fillOpacity="0.4" />
          <text x="32" y="38" textAnchor="middle" fill="#0F172A" fontFamily="monospace" fontWeight="bold" fontSize="12">SQL</text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none">
          <path d="M31.8 4c-.5 0-1 .4-1.2.9C28.2 12.8 16 28 16 39.8c0 9.8 7.3 17.8 15.6 19.8.3.1.6.1.9 0 8.3-2 15.6-10 15.6-19.8 0-11.8-12.2-27-14.6-34.9-.2-.5-.7-.9-1.2-.9z" fill="#13AA52" />
          <path d="M31.8 4.2V59.5c.3 0 .6 0 .9 0 8.3-2 15.6-10 15.6-19.8 0-11.8-12.2-27-14.6-34.9-.3-.4-.6-.6-.9-.6z" fill="#10803A" />
          <path d="M32 50c-.5 0-1-.3-1.2-.8l-4-9c-.3-.7 0-1.5.7-1.8.7-.3 1.5 0 1.8.7l2.7 6.1 2.7-6.1c.3-.7 1.1-1 1.8-.7.7.3 1 1.1.7 1.8l-4 9c-.2.5-.7.8-1.2.8z" fill="#FFFFFF" />
        </svg>
      );

    case 'linux':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="38" rx="18" ry="20" fill="#292524" />
          <ellipse cx="32" cy="40" rx="12" ry="14" fill="#FFFFFF" />
          <circle cx="32" cy="18" r="12" fill="#292524" />
          <circle cx="28" cy="16" r="3" fill="#FFFFFF" />
          <circle cx="36" cy="16" r="3" fill="#FFFFFF" />
          <circle cx="28" cy="16" r="1.5" fill="#000000" />
          <circle cx="36" cy="16" r="1.5" fill="#000000" />
          <path d="M26 21c2 3 10 3 12 0l-6 4-6-4z" fill="#F59E0B" />
          <ellipse cx="20" cy="56" rx="8" ry="4" fill="#F59E0B" />
          <ellipse cx="44" cy="56" rx="8" ry="4" fill="#F59E0B" />
        </svg>
      );

    case 'windows':
      return (
        <svg className={className} viewBox="0 0 88 88" fill="none">
          <path d="M0 12.4L35.7 7.5v32.8H0V12.4zm35.7 33.4H0v28l35.7 4.9V45.8zM40.2 6.8L88 0v40.3H40.2V6.8zm47.8 39H40.2v33.5L88 88V45.8z" fill="#0078D4" />
        </svg>
      );

    default:
      return (
        <div className="w-6 h-6 rounded-lg bg-stone-700 text-white font-mono text-xs flex items-center justify-center font-bold">
          {id.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
