import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Marks render against a dark surface — strokes/fills use currentColor so the
 * caller sets the color via Tailwind text-* classes. The REALTOR® mark fills
 * the inner rectangle with currentColor and the outer "REALTOR®" caption uses
 * a contrasting foreground.
 */

export function RealtorMark({
  width = 44,
  height = 48,
  ...rest
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 70"
      role="img"
      aria-label="REALTOR registered trademark"
      {...rest}
    >
      <rect
        x="2"
        y="2"
        width="56"
        height="56"
        fill="currentColor"
      />
      <text
        x="30"
        y="44"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="40"
        fill="#0B1F33"
      >
        R
      </text>
      <text
        x="30"
        y="68"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="0.5"
        fill="currentColor"
      >
        REALTOR®
      </text>
    </svg>
  );
}

export function EqualHousingMark({
  width = 50,
  height = 48,
  ...rest
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      role="img"
      aria-label="Equal Housing Opportunity"
      {...rest}
    >
      <path
        d="M35 8 L60 28 L60 54 L10 54 L10 28 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="miter"
      />
      <rect x="22" y="34" width="26" height="3.5" fill="currentColor" />
      <rect x="22" y="42" width="26" height="3.5" fill="currentColor" />
      <text
        x="35"
        y="66"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="currentColor"
      >
        EQUAL HOUSING
      </text>
      <text
        x="35"
        y="72"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="5.5"
        letterSpacing="0.4"
        fill="currentColor"
      >
        OPPORTUNITY
      </text>
    </svg>
  );
}

export function CompassWordmark({
  width = 132,
  height = 24,
  ...rest
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 40"
      role="img"
      aria-label="Compass"
      {...rest}
    >
      <text
        x="0"
        y="30"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="32"
        letterSpacing="2"
        fill="currentColor"
      >
        C
      </text>
      <circle cx="40" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <line
        x1="34"
        y1="26"
        x2="46"
        y2="14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text
        x="58"
        y="30"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="32"
        letterSpacing="2"
        fill="currentColor"
      >
        MPASS
      </text>
    </svg>
  );
}
