import { StyledComponentProps } from '../../types/StyledComponent'
import { TabProps } from '../../types/Tab'

export interface StyledTabTitleProps extends StyledComponentProps {
  focused: boolean
}

export interface TabBarButtonProps {
  /**
   * The tab configuration
   */
  tab: TabProps
  /**
   * Whether the tab is focused
   */
  focused: boolean
  /**
   * The index of the tab
   */
  index: number
}
