import { StyledComponentProps } from '../../types/StyledComponent'
import { ReactNode } from 'react'


export interface ThumbnailOptionProps extends StyledComponentProps { 
  title: string
  subtitle: string
  renderThumbnail: () => React.ReactNode;
}


export interface StyledOptionProps extends StyledComponentProps {
  
}