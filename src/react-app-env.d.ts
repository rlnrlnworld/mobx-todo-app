// src/react-app-env.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module 'web-vitals' {
  export type ReportHandler = (metric: {
    name: string;
    value: number;
    id: string;
    delta: number;
    entries: PerformanceEntry[];
  }) => void;

  export function getCLS(onReport: ReportHandler): void;
  export function getFID(onReport: ReportHandler): void;
  export function getFCP(onReport: ReportHandler): void;
  export function getLCP(onReport: ReportHandler): void;
  export function getTTFB(onReport: ReportHandler): void;
}