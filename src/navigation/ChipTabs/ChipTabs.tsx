import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, ScrollView, LayoutChangeEvent } from 'react-native';
import { LineFilter } from '../../icons';
import { ModalFilter } from '../../modals';
import { RedBadge } from '../../others';
import {
  StyledTabWithIcon,
  StyledTabText,
  StyledTabButton,
  StyledNormalTabs,
  StyledChipTabsContainer,
  StyledStickyTabsContainer,
  StyledFilteredChipTabsContainer,
  StyledTabMarginContainer
} from './ChipTabs.styles';
import {
  ChipTabsWrapperProps,
  StickyTabsWrapperProps,
  TabProps,
  ChipTabsProps,
  FilteredChipTabsProps,
  TextOrIconTabProps
} from './ChipTabs.types';

const ChipTabsWrapper = ({ setChipTabsWrapperWidth, children }: ChipTabsWrapperProps) => (
  <StyledChipTabsContainer onLayout={(e: LayoutChangeEvent) => setChipTabsWrapperWidth(e.nativeEvent.layout.width)}>
    {children}
  </StyledChipTabsContainer>
);

const StickyTabsWrapper = ({ setStickyTabsWidth, children }: StickyTabsWrapperProps) => (
  <StyledStickyTabsContainer onLayout={(e: LayoutChangeEvent) => setStickyTabsWidth(e.nativeEvent.layout.width)}>
    {children}
  </StyledStickyTabsContainer>
);

const Tab = ({ tabs, tab, selectedTab, setSelectedTab, index }: TabProps) => (
  <StyledTabMarginContainer isLast={index === tabs.length - 1}>
    <RedBadge config={{ useDisplayBadge: tab.useDisplayBadge }}>
      <TextOrIconTab
        selectedTab={selectedTab}
        tab={tab}
        setSelectedTab={setSelectedTab}
        index={index}
        last={index === tabs.length - 1}
        theme={{}} 
      />
    </RedBadge>
  </StyledTabMarginContainer>
);

const ChipTabs = ({
  tabs,
  selectedTab,
  setSelectedTab,
  tabWrapper: Wrapper = React.Fragment,
  children
}: ChipTabsProps) => {
  const stickyTab = tabs.find((tab) => tab.sticky);
  const [chipTabsWrapperWidth, setChipTabsWrapperWidth] = useState(0);
  const [stickyTabsWidth, setStickyTabsWidth] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const normalTabsWidth = useMemo(() => {
    return chipTabsWrapperWidth - stickyTabsWidth - 8;
  }, [chipTabsWrapperWidth, stickyTabsWidth]);

  useEffect(() => {
    if (scrollViewRef.current && selectedTab?.name) {
      const index = tabs.findIndex((tab) => tab.name === selectedTab.name);
      if (index !== -1) {
        setTimeout(() => {
          scrollViewRef.current?.scrollTo?.({ x: index * 50, animated: true });
        }, 50);
      }
    }
  }, [tabs, selectedTab]);

  if (!tabs || tabs.length === 0) return null;

  return (
    <ChipTabsWrapper setChipTabsWrapperWidth={setChipTabsWrapperWidth}>
      <StyledNormalTabs width={normalTabsWidth}>
        <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false}>
          {tabs
            .filter((tab) => !tab.sticky)
            .map((tab, index) => (
              <Wrapper tabName={tab.name} key={tab.name || index}>
                <Tab
                  tab={tab}
                  tabs={tabs}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  index={index}
                />
              </Wrapper>
            ))}
        </ScrollView>
      </StyledNormalTabs>
      <StickyTabsWrapper setStickyTabsWidth={setStickyTabsWidth}>
        {stickyTab ? (
          <Tab
            tab={stickyTab}
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            index={tabs.indexOf(stickyTab)}
          />
        ) : (
          children
        )}
      </StickyTabsWrapper>
    </ChipTabsWrapper>
  );
};

export const FilteredChipTabs = ({ title, options, ...props }: FilteredChipTabsProps) => (
  <StyledFilteredChipTabsContainer>
    <ChipTabs {...props}>
      <View>
      <ModalFilter
          title={title}
          options={options}
          initialValue={props.selectedTab?.name}
          onSubmit={(selected) => {
            const name =
              typeof selected === 'string'
                ? selected
                : Array.isArray(selected)
                ? selected[0]
                : null;
          
            if (!name) return;
          
            props.setSelectedTab(options.find((option) => option.name === name) ?? props.selectedTab);
          }}
        >
          {(ref: React.RefObject<{ present: () => void }>) => (
            <StyledTabButton onPress={() => ref.current?.present()}>
              <LineFilter size={20} />
            </StyledTabButton>
          )}
        </ModalFilter>
      </View>
    </ChipTabs>
  </StyledFilteredChipTabsContainer>
);

const TextOrIconTab = ({
  selectedTab,
  tab,
  index,
  setSelectedTab,
  theme,
  ...props
}: TextOrIconTabProps) => {
  const name = tab.name || tab.label || '';
  const isSelected =
    selectedTab?.label === name ||
    selectedTab?.name === name;

  const showIcon = !!tab.icon;

  return (
    <StyledTabButton
      key={index}
      selected={isSelected}
      onPress={() => setSelectedTab(tab)}
      disabled={tab.disabled}
      {...props}
    >
      {showIcon ? (
        <StyledTabWithIcon selected={isSelected}>
          {tab.icon}
          {tab.count !== undefined && (
            <StyledTabText selected={isSelected}>{tab.count}</StyledTabText>
          )}
        </StyledTabWithIcon>
      ) : (
        <StyledTabText selected={isSelected}>
          {tab.label}
          {tab.count !== undefined ? ` ${tab.count}` : ''}
        </StyledTabText>
      )}
    </StyledTabButton>
  );
};

export default ChipTabs;
