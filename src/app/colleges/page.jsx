"use client"
import dynamic from 'next/dynamic';

const MyClientOnlyComponent = dynamic(() => import('./college.jsx'), { ssr: false });

export default function Page() {
  return <MyClientOnlyComponent />;
}