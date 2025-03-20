import styled, { css } from 'styled-components'
import { Text, View, TouchableOpacity } from 'react-native'
import { TextOrIconTabProps, StyledTabButtonProps } from './ChipTabs.types'


export const StyledTabButton = styled(TouchableOpacity)<StyledTabButtonProps>`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.std}`};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.grey1};
  min-width: 48px;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;


export const StyledTabText = styled(Text)<TextOrIconTabProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.black};
  font-size: 14px;
`;


export const StyledTabWithIcon = styled(View)<TextOrIconTabProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.black};
`;


export const ChipTabsContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  padding-bottom: 16px;
`;

export const StickyTabsContainer = styled(View)`
  position: absolute;
  right: 2px;
`;

export const FilteredChipTabsContainer = styled(View)`
  margin-left: 16px;
`;

export const TabMarginContainer = styled(View)`
  margin-right: ${({ isLast }) => (isLast ? '16px' : '4px')};
`;
