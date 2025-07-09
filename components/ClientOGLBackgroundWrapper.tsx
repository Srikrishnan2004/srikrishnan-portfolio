"use client";
import dynamic from "next/dynamic";
const OGLBackground = dynamic(() => import("@/components/ui/ogl-background"), { ssr: false });
export default function ClientOGLBackgroundWrapper() {
  return <OGLBackground />;
} 