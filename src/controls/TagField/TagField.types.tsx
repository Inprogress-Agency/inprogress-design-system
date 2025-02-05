export interface TagListProps {
  tags: string[]
  onRemove: (tag: string) => void
}

export interface TagFieldProps {
  /**
   * Tags to display under the tag field
   */
  tags: string[]
  /**
   * Function to call when the tags array is updated
   */
  onChange: (tags: string[]) => void
}
