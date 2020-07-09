import { Ref, MutableRefObject } from 'react';

interface NameProps {
  forwardedRef: MutableRefObject<SVGSVGElement>;
}

export default function Name({ forwardedRef }: NameProps) {
  return (
    <svg ref={forwardedRef} viewBox="0 0 356 60.45">
      <path d="M48.48,55.2a3.41,3.41,0,0,0,2.32,1.16l-.32,1.44q-4.21-.24-12.17-.23-8.37,0-12.27.21l.32-1.44A13.91,13.91,0,0,0,30,55.8a3.58,3.58,0,0,0,1.95-1.51,6,6,0,0,0,.65-3.08,6.91,6.91,0,0,0,0-.91L32,38.48H17.78l-7,9.88a7.8,7.8,0,0,0-1.69,4.12c0,2.25,2.21,3.53,6.61,3.86l-.31,1.44Q8,57.57,5.19,57.57c-1.64,0-3.21.08-4.71.23L.8,56.36a7.89,7.89,0,0,0,2.6-1.28A16.08,16.08,0,0,0,6,52.51c.93-1.11,2.12-2.68,3.57-4.73L38.94,6.48a25.75,25.75,0,0,0,2.78.14,23.35,23.35,0,0,0,2.64-.14l2.88,45.28A5.55,5.55,0,0,0,48.48,55.2ZM31,19.87,18.8,37.06h13Z" />
      <path d="M97.19,46.13,95.4,51.41q-2.59,7.41-10.3,7.41c-3.09,0-5.26-.86-6.5-2.6a6.66,6.66,0,0,1-1.2-4,19.25,19.25,0,0,1,1.13-5.77l6.18-18.63A9.72,9.72,0,0,0,85.35,25c0-.73-.26-1.09-.78-1.09-1.24,0-2.85,1.66-4.83,5a88.47,88.47,0,0,0-6,12.91,146.77,146.77,0,0,0-5.13,15.74v-.14l-.11.35H55.78l8.79-31.21A10.56,10.56,0,0,0,65,24.5c0-.64-.35-.95-1-.95a2.79,2.79,0,0,0-2.08,1A11.07,11.07,0,0,0,60,28.06l-1.65,4.4H56.94l2-5.63a11.5,11.5,0,0,1,3.77-5.61,9.94,9.94,0,0,1,6.11-1.81c2.7,0,4.64.64,5.82,1.9a6.88,6.88,0,0,1,1.78,4.89A13.2,13.2,0,0,1,76,29.5L74,37a58.31,58.31,0,0,1,5.4-10.84,16.16,16.16,0,0,1,5.22-5.28,12.19,12.19,0,0,1,6-1.46q7.07,0,7.07,6a16.26,16.26,0,0,1-1,4.92l-7.1,21.38a5.62,5.62,0,0,0-.36,1.72c0,.87.4,1.3,1.2,1.3q2.14,0,3.83-4.53l1.51-4Z" />
      <path d="M140.82,46.13,139,51.41q-2.53,7.41-10.3,7.41c-3,0-5.2-.91-6.47-2.74a7.13,7.13,0,0,1-1-4,14.94,14.94,0,0,1,.35-3.2,21.43,21.43,0,0,1-5.13,7.52,10.48,10.48,0,0,1-7.08,2.42,10.05,10.05,0,0,1-4.69-1.1,8,8,0,0,1-3.34-3.47,12.47,12.47,0,0,1-1.25-5.94,32,32,0,0,1,2.93-12.51,31.54,31.54,0,0,1,8.43-11.61,19.27,19.27,0,0,1,13-4.78q3.48,0,4.39,1.8l3-11.43a8.58,8.58,0,0,0,.36-2,2.2,2.2,0,0,0-1.13-2.09A7.72,7.72,0,0,0,127.34,5l.51-1.46a64.24,64.24,0,0,0,19.51-3L133.27,51.69a5.31,5.31,0,0,0-.36,1.68c0,.9.41,1.34,1.23,1.34,1.41,0,2.67-1.51,3.8-4.53l1.51-4Zm-23.11,6.66a22.72,22.72,0,0,0,3.11-5,61.49,61.49,0,0,0,3.3-8.68l2.18-8.23v-.14h0l2.07-7.91a2.53,2.53,0,0,0-.75-1.34,2.39,2.39,0,0,0-1.53-.42c-1.48,0-3.22,1.43-5.24,4.27a40.62,40.62,0,0,0-5.19,11,44.92,44.92,0,0,0-2.18,13.86,9.8,9.8,0,0,0,.37,3.14,1.38,1.38,0,0,0,1.36,1A3.83,3.83,0,0,0,117.71,52.79Z" />
      <path d="M178.35,20.33a6.15,6.15,0,0,1,2.39,2.51,7.74,7.74,0,0,1,.83,3.57,9.76,9.76,0,0,1-1.09,4.46,8.53,8.53,0,0,1-2.91,3.31,7.28,7.28,0,0,1-4.09,1.23,5.58,5.58,0,0,1-4-1.37,5.51,5.51,0,0,1-1.39-4,7.9,7.9,0,0,1,1.08-4,10.07,10.07,0,0,1,2.88-3.21A9.45,9.45,0,0,1,176,21.12a4.29,4.29,0,0,0-1-.24,9,9,0,0,0-4.15.93q-1.86.93-4.13,4.6a55.25,55.25,0,0,0-4.84,11.16l-5.31,20.21H143.78l8.79-31.21a7.39,7.39,0,0,0,.31-1.86c0-.78-.31-1.16-1-1.16a2.73,2.73,0,0,0-2.07,1,11.07,11.07,0,0,0-1.9,3.51l-1.65,4.4h-1.37l2-5.63q2.72-7.41,10.72-7.42,3.55,0,5.12,1.92a7.63,7.63,0,0,1,1.56,4.94,12.16,12.16,0,0,1-.07,1.34,20.45,20.45,0,0,1,2.94-4.87,9.15,9.15,0,0,1,3.3-2.55,10,10,0,0,1,4.1-.78A7.2,7.2,0,0,1,178.35,20.33Z" />
      <path d="M211.73,33.34a27.92,27.92,0,0,1-8.43,5.87,54.73,54.73,0,0,1-11,3.76c-.14,1.22-.22,2.46-.24,3.69,0,2.62.5,4.43,1.51,5.45A6,6,0,0,0,198,53.62a12.44,12.44,0,0,0,4.63-1.23,18.67,18.67,0,0,0,5.46-3.8l1.13.57a22.75,22.75,0,0,1-7.42,6.89A20.83,20.83,0,0,1,191,58.82a16.44,16.44,0,0,1-6.28-1.17,10.47,10.47,0,0,1-4.5-3.47,9.08,9.08,0,0,1-1.67-5.52,29.06,29.06,0,0,1,3.64-13.85,30.92,30.92,0,0,1,10-11.09,24.06,24.06,0,0,1,13.9-4.31A11.49,11.49,0,0,1,212.57,21,5.29,5.29,0,0,1,215,25.78,10.81,10.81,0,0,1,211.73,33.34ZM200,23.9a33.56,33.56,0,0,0-4.57,8,44.38,44.38,0,0,0-2.94,9.77,31.35,31.35,0,0,0,6.61-4.89q6.54-6.48,6.54-14.17c0-1.22-.38-1.83-1.16-1.83Q202.47,20.78,200,23.9Z" />
      <path d="M257,22a16.3,16.3,0,0,1,2.39,6,35.73,35.73,0,0,1-1.25,18.34,22.31,22.31,0,0,1-5.59,9,12.15,12.15,0,0,1-8.67,3.48,13.65,13.65,0,0,1-4.9-.87,8,8,0,0,1-3.61-2.82,16.53,16.53,0,0,1-11.07,3.69,11.89,11.89,0,0,1-5.5-1.19,8.13,8.13,0,0,1-3.48-3.29,9.44,9.44,0,0,1-1.18-4.73A13,13,0,0,1,216.74,42a39,39,0,0,1,6.82-7.24q4.24-3.57,12.57-9.83l3.35-2.45a9.39,9.39,0,0,0-3.32.61,11.72,11.72,0,0,0-2.6,1.36c-.74.51-1.6,1.18-2.59,2a24.84,24.84,0,0,1-2.8,2.09,4.49,4.49,0,0,1-2.34.65,6,6,0,0,1-2.28-.6,4.39,4.39,0,0,0-1.69-.49,1.68,1.68,0,0,0-1.37.62,7.49,7.49,0,0,0-1,2.12L219,32.39h-1.38l1.59-5.24c.82-2.79,1.81-4.71,3-5.77a5.71,5.71,0,0,1,3.93-1.58,11.86,11.86,0,0,1,3.38.67c1,.3,1.91.54,2.78.72a17.14,17.14,0,0,0,3.12.26,12.76,12.76,0,0,0,5.31-1.09l.74-1.37,1.51.74a76.94,76.94,0,0,0-7.82,10.74,64.27,64.27,0,0,0-5.36,10.92,26.58,26.58,0,0,0-1.93,9.07,6.19,6.19,0,0,0,.75,3.39A3,3,0,0,0,231.24,55a7.27,7.27,0,0,0,3.52-1,11.2,11.2,0,0,1-1.06-5.09,17.83,17.83,0,0,1,2-8.23,19.82,19.82,0,0,1,4.88-6.35,8.64,8.64,0,0,1,5.35-2.41c2,0,3,1.52,3,4.54A21.43,21.43,0,0,1,244,50.16a6,6,0,0,0,5.31,2.64,6.35,6.35,0,0,0,4.92-2.36,16.05,16.05,0,0,0,3.13-6.24,34.82,34.82,0,0,0,1.23-8.49,52.3,52.3,0,0,1-5.57-3,14.59,14.59,0,0,1-3.94-3.61,8.15,8.15,0,0,1-1.64-5,4.9,4.9,0,0,1,.52-2.19,4.45,4.45,0,0,1,1.64-1.8,5,5,0,0,1,2.79-.72A5.34,5.34,0,0,1,257,22ZM244.39,35.2a17.3,17.3,0,0,0-1.3,4.29A30.43,30.43,0,0,0,242.6,45a10.4,10.4,0,0,0,.67,3.9,23.39,23.39,0,0,0,2.9-5.81,19.45,19.45,0,0,0,1-6.14c0-2.25-.39-3.37-1.16-3.37C245.48,33.57,244.93,34.1,244.39,35.2Z" />
      <path d="M321.7,48.57a65.43,65.43,0,0,0-1.9,9.21q-4.87-.21-16.24-.21-17,0-25.35.21l.29-1.44a13.79,13.79,0,0,0,3.88-.56,4,4,0,0,0,2.1-1.67A15,15,0,0,0,286,50.18l9.53-35.72a16.29,16.29,0,0,0,.59-3.45,2.43,2.43,0,0,0-.47-1.65,2.65,2.65,0,0,0-1.5-.79,17.37,17.37,0,0,0-2.88-.3l.39-1.44q4.18.21,13.6.21,7.53,0,12.59-.21l-.42,1.44a13.66,13.66,0,0,0-3.92.56,3.79,3.79,0,0,0-2,1.74A15.69,15.69,0,0,0,310,14.51l-9.54,35.67a16.06,16.06,0,0,0-.63,3.51,2.19,2.19,0,0,0,.47,1.55,2.7,2.7,0,0,0,1.46.72,16.17,16.17,0,0,0,2.78.19h1.3a13.5,13.5,0,0,0,5.62-1.35,18,18,0,0,0,5.71-4.38,26.09,26.09,0,0,0,4.71-7.73h1.58A49.8,49.8,0,0,0,321.7,48.57Z" />
      <path d="M335.59,24.76c0-.82-.33-1.23-1-1.23a2.81,2.81,0,0,0-2.11,1,10.69,10.69,0,0,0-1.9,3.51l-1.66,4.4h-1.37l2-5.63q2.7-7.41,10.76-7.42c2.57,0,4.47.62,5.67,1.87a6.51,6.51,0,0,1,1.81,4.78,10.9,10.9,0,0,1-.59,3.44l-7.49,22.19a5.51,5.51,0,0,0-.35,1.76,1.11,1.11,0,0,0,.92,1.26,1.61,1.61,0,0,0,.31,0c1.4,0,2.67-1.51,3.79-4.53l1.52-4h1.37l-1.79,5.21q-2.52,7.41-10.3,7.41a8.46,8.46,0,0,1-5.7-1.72,6.41,6.41,0,0,1-2-5.1,18.32,18.32,0,0,1,1-5.59l6.72-19.84A5.15,5.15,0,0,0,335.59,24.76Zm5.06-21.32a9.75,9.75,0,0,1,6.37-2,7.78,7.78,0,0,1,4.76,1.25,4.35,4.35,0,0,1,1.63,3.68,6.77,6.77,0,0,1-1.16,3.92,7.68,7.68,0,0,1-3.18,2.63,10.8,10.8,0,0,1-4.52.93,7.82,7.82,0,0,1-4.71-1.21,4.15,4.15,0,0,1-1.61-3.53,6.84,6.84,0,0,1,2.42-5.67Z" />
    </svg>
  );
}
