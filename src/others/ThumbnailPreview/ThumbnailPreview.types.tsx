import React from 'react';

export interface ThumbnailPreviewProps {
  icon: React.ReactElement;
  label: string;
  thumbnail: string | null;
  setThumbnail: (value: string | null) => void;
  initialValue?: string | null;
  width?: number;
  height?: number;
}