import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: SVGProps<SVGSVGElement> = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function GoogleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21.6 12.23c0-.7-.06-1.4-.18-2.07H12v3.92h5.42a4.65 4.65 0 0 1-2.01 3.05v2.52h3.25c1.9-1.75 3-4.32 3-7.42z" />
      <path d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.25-2.52c-.9.6-2.05.96-3.37.96-2.6 0-4.8-1.75-5.58-4.1H3.05v2.6A10 10 0 0 0 12 22z" />
      <path d="M6.42 13.91A6 6 0 0 1 6.1 12c0-.66.12-1.3.32-1.91V7.49H3.05A10 10 0 0 0 2 12c0 1.62.39 3.15 1.05 4.51l3.37-2.6z" />
      <path d="M12 6.4c1.47 0 2.78.5 3.82 1.5l2.86-2.86C16.97 3.45 14.7 2.55 12 2.55a10 10 0 0 0-8.95 4.94l3.37 2.6C7.2 8.15 9.4 6.4 12 6.4z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.88 4 12 4 12 4s-6.88 0-8.6.5A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.5C5.12 20 12 20 12 20s6.88 0 8.6-.5a2.78 2.78 0 0 0 1.94-1.92A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2a4 4 0 0 1 4-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ThreadsIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M19 7.5C18 4.4 15.5 3 12.4 3 8.5 3 5 5.6 5 11s3 9 7.5 9c2.7 0 4.6-.9 6-2.7" />
      <path d="M16.5 13.5c0-2.5-2-4-4.5-4-2 0-3.5 1-3.5 2.5s1.4 2.5 3.5 2.5c2.5 0 4.5-1.5 4.5-4 0-3-2.5-4.5-5-4.5" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3a5 5 0 0 0 5 5" />
    </svg>
  );
}
