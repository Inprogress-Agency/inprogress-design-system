import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { GradientScrollView } from '../../../src/layout'
import { View } from 'react-native'
import styled, { css } from 'styled-components/native'
import React from 'react'

const meta: Meta<typeof GradientScrollView> = {
  title: 'Layout/GradientScrollView',
  component: GradientScrollView,
  argTypes: generateArgTypes(GradientScrollView),
  parameters: generateParameters(GradientScrollView),
}

export default meta

const Box = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.grey1};
    margin-bottom: ${theme.space.s};
  `}
`

export const Overview: StoryObj<typeof GradientScrollView> = {
  args: {
    children: (
      <View style={{ width: '100%', paddingTop: 4 }}>
        {Array.from({ length: 20 }, (_, index) => ({
          id: index,
        })).map(item => (
          <Box key={item.id} />
        ))}
      </View>
    ),
  },
}
