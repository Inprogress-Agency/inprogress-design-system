import { StyledComponentProps } from '../../types/StyledComponent'

export interface StyledCellProps extends StyledComponentProps {
  cellSize: number
  isFocused: boolean
}

export interface StyledTextCodeProps extends StyledComponentProps {
  cellSize: number
}

export interface CodeFieldProps {
  /**
   * The code to display in the input
   */
  code: string
  /**
   * The function to call when the code changes
   */
  onChange: (code: string) => void
}
