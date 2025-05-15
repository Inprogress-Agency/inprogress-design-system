import styled from 'styled-components/native';
import { css } from 'styled-components';
import { Edit } from '@/Assets/Icons/components';
import { Text } from '../../texts';
import { StyledComponentProps } from '../../types/StyledComponent'


export const ItemWrapper = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size?.fill ?? '100%'};
    padding: ${theme.space.l}px;
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l}px;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: ${theme.space.std}px;

    position: relative;
  `}
`;

export const LabelText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    margin-top: ${theme.space.m}px;
  `}
`;


export const EditIcon = styled(Edit).attrs((props) => ({
  color: props.theme.colors.black,
}))`
  position: absolute;
  top: ${({ theme }: StyledComponentProps) => theme.space.s}px;
  right: ${({ theme }:StyledComponentProps) => theme.space.s}px;
`;
