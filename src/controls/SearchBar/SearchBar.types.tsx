export interface ButtonCloseProps {
  value: string
  onChange: (value: string) => void
}

export interface SearchBarProps {
  /**
   * Placeholder to display in input when value is empty
   */
  placeholder: string
  /**
   * Text to display in the input
   */
  value: string
  /**
   * Function to call when the text changes
   * @param value - Text displayed in the input
   * @returns void
   */
  onChange: (value: string) => void
  /**
   * If true, the input will be focused when the component is mounted
   * @default false
   */
  autoFocus: boolean
  /**
   * Wether the input is inside a modal
   * @default false
   */
  insideModal: boolean
}
