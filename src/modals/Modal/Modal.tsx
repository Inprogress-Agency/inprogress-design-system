import {
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import React, { forwardRef, memo, useCallback, useMemo } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useReducedMotion } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  StyledClose,
  StyledHeader,
  StyledHeaderWrapper,
  StyledScrollView,
  StyledSubtitle,
  StyledTitle,
  StyledView,
} from './Modal.styles'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'
import { LineClose } from '../../icons'
import { HeaderProps, ModalProps } from './Modal.types'
import { Button } from '../../buttons'
import { dimensionsFallback } from '../../utils/dimensionsFallback'

const Header = ({ header, onDismiss }: HeaderProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  return (
    <StyledHeaderWrapper theme={theme}>
      <StyledHeader>{header}</StyledHeader>
      {onDismiss && (
        <StyledClose onPress={onDismiss} hasHeader={Boolean(header)}>
          <LineClose color={theme.colors.grey2} />
        </StyledClose>
      )}
    </StyledHeaderWrapper>
  )
}

const { height } = Dimensions.get('window') || dimensionsFallback

export const Modal = forwardRef(
  (
    {
      closable = false,
      header,
      title = '',
      subtitle = '',
      footer,
      actions = [],
      loading = false,
      fullscreen = false,
      children,
      enablePanDownToClose = true,
      enableBackdropClose = true,
      scrollEnabled = true,
      childrenStyle = {},
      keyboardShouldPersistTaps = 'never',
      onDismiss = () => null,
      renderCustomFooter = () => null,
      ...props
    }: ModalProps,
    ref: React.Ref<BottomSheetModal>
  ) => {
    const { top, bottom } = useSafeAreaInsets()
    const { theme } = useSelector((state: RootState) => state.theme)
    const reducedMotion = useReducedMotion()

    const renderBackdrop = useCallback(
      (params: any) => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior={enableBackdropClose ? 'close' : 'none'}
          {...params}
        />
      ),
      [enableBackdropClose]
    )

    const styles = useMemo(() => {
      return StyleSheet.create({
        handleIndicator: {
          backgroundColor: theme.colors.grey2,
          height: 3,
          width: 40,
        },
        scrollView: {
          flex: 1,
        },
        containerView: {
          height: fullscreen ? height * 0.8 : undefined,
        },
      })
    }, [fullscreen, theme.colors.grey2])

    const Wrapper = useMemo(() => {
      return scrollEnabled ? StyledScrollView : StyledView
    }, [scrollEnabled])

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        enableDynamicSizing
        enablePanDownToClose={enablePanDownToClose}
        backdropComponent={renderBackdrop}
        topInset={top + 12}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustResize"
        handleComponent={closable || header ? null : BottomSheetHandle}
        backgroundStyle={{
          backgroundColor: theme.colors.white,
        }}
        animateOnMount={!reducedMotion}
        {...props}
      >
        <BottomSheetScrollView
          scrollEnabled={scrollEnabled}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <BottomSheetView style={[styles.containerView, childrenStyle]}>
            {(closable || header) && (
              <Header
                header={header}
                onDismiss={
                  closable
                    ? () => {
                        ;(ref as React.RefObject<BottomSheetModal>).current?.dismiss?.()
                        onDismiss()
                      }
                    : () => null
                }
              />
            )}
            {title && <StyledTitle theme={theme}>{title}</StyledTitle>}
            {subtitle && <StyledSubtitle theme={theme}>{subtitle}</StyledSubtitle>}
            <Wrapper keyboardShouldPersistTaps={keyboardShouldPersistTaps}>{children}</Wrapper>

            {footer ? (
              <View style={{ marginBottom: bottom }}>{footer}</View>
            ) : (
              <View style={{ padding: 16 }}>
                {renderCustomFooter()}
                {actions.map((action, i) => {
                  if ('custom' in action) {
                    return action.custom
                  }
                  return (
                    <View key={i} style={{ marginBottom: 12, height: 48 }}>
                      <Button
                        {...action}
                        loading={action.loading || (loading && i === actions.length - 1)}
                      />
                    </View>
                  )
                })}
              </View>
            )}
          </BottomSheetView>
        </BottomSheetScrollView>
      </BottomSheetModal>
    )
  }
)

export default memo(Modal)
