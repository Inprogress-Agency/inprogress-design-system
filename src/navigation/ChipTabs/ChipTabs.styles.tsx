import styled, { css } from 'styled-components/native'
import { 
  StyledTabButtonProps,
  StyledTabTextProps,
  StyledNormalTabsProps,
  StyledTabMarginContainerProps
} from  "./ChipTabs.types"

export const StyledTabButton = styled.TouchableOpacity`
${({ theme, selected, disabled }: StyledTabButtonProps) =>  css`
  padding: ${`${theme.space.xs} ${theme.space.std}`};
  border-radius: ${theme.borderRadius.m};
  background-color: ${selected ? theme.colors.primary : theme.colors.grey1};
  min-width: 48px;
  justify-content: center;
  align-items: center;
  opacity: ${disabled ? 0.6 : 1};
`}
`



export const StyledTabText = styled.View`
${({ theme, selected }: StyledTabTextProps) =>  css`
  color: ${selected ? theme.colors.white : theme.colors.black};
  font-size: 14px;
  `}
`;


export const StyledTabWithIcon = styled.View`
${({ theme, selected }: StyledTabTextProps) =>  css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${selected ? theme.colors.white : theme.colors.black};
  `}
`;


export const StyledChipTabsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-bottom: 16px;
`;

export const StyledStickyTabsContainer = styled.View`
  position: absolute;
  right: 2px;
`;

export const StyledFilteredChipTabsContainer = styled.View`
  margin-left: 16px;
`;


export const StyledTabMarginContainer = styled.View`
 ${({ isLast }: StyledTabMarginContainerProps) =>  css`
 margin-right: ${isLast ? '16px' : '4px'}
  `}
`;


export const StyledNormalTabs = styled.View`
  ${({ width }: StyledNormalTabsProps) =>  css`
  width: ${width} ;
  padding-right: 16px;
  `}
`;



