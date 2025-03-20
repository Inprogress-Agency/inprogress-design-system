import { LineFilter } from '../../icons';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StyledTabWithIcon, StyledTabText, StyledTabButton, NormalTabs, ChipTabsContainer, StickyTabsContainer,FilteredChipTabsContainer , TabMarginContainer } from './ChipTabs.styles';
import { ChipTabsWrapperProps, StickyTabsWrapperProps, TabProps, ChipTabsProps, FilteredChipTabsProps, TextOrIconTabProps } from './ChipTabs.types';
import { Text } from '../../texts';
import { ModalFilter } from '../../modals';
import { RedBadge } from '../../others';


const ChipTabsWrapper = ({ setChipTabsWrapperWidth, children }: ChipTabsWrapperProps) => {
  return (
    <ChipTabsContainer onLayout={(e) => setChipTabsWrapperWidth(e.nativeEvent.layout.width)}>
      {children}
    </ChipTabsContainer>
  );
};

const StickyTabsWrapper = ({ setStickyTabsWidth, children }: StickyTabsWrapperProps) => {
  return (
    <StickyTabsContainer onLayout={(e) => setStickyTabsWidth(e.nativeEvent.layout.width)}>
      {children}
    </StickyTabsContainer>
  );
};

const Tab = ({ tabs, tab, selectedTab, setSelectedTab, index }: TabProps) => {
  return (
    <TabMarginContainer isLast={index === tabs.length - 1}>
      <RedBadge config={tab}>
        <TextOrIconTab selectedTab={selectedTab} tab={tab} setSelectedTab={setSelectedTab} index={index} />
      </RedBadge>
    </TabMarginContainer>
  );
};

const ChipTabs = ({ tabs, selectedTab, setSelectedTab, tabWrapper = React.Fragment, children }: ChipTabsProps) => {
  const stickyTab = tabs.find((tab) => tab.sticky);
  const [chipTabsWrapperWidth, setChipTabsWrapperWidth] = useState(0);
  const [stickyTabsWidth, setStickyTabsWidth] = useState(0);
  const scrollViewRef = useRef(null);

  const normalTabsWidth = useMemo(() => {
    return chipTabsWrapperWidth - stickyTabsWidth - 8;
  }, [chipTabsWrapperWidth, stickyTabsWidth]);

  useEffect(() => {
    if (scrollViewRef.current && selectedTab) {
      const index = tabs.findIndex((tab) => tab.name === selectedTab.name);
      if (index !== -1) {
        setTimeout(() => {
          scrollViewRef?.current?.scrollTo?.({ x: index * 50, animated: true });
        }, 50);
      }
    }
  }, [tabs, selectedTab]);

  if (!tabs) {
    return null;
  }

  return (
    <ChipTabsWrapper setChipTabsWrapperWidth={setChipTabsWrapperWidth}>
      <NormalTabs width={normalTabsWidth}>
        <ScrollView ref={scrollViewRef} horizontal>
          {tabs
            .filter((tab) => !tab.sticky)
            .map((tab, index) => (
              <tabWrapper tabName={tab.name} key={index}>
                <Tab tab={tab} tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} index={index} />
              </tabWrapper>
            ))}
        </ScrollView>
      </NormalTabs>
      <StickyTabsWrapper setStickyTabsWidth={setStickyTabsWidth}>
        {stickyTab ? <Tab tab={stickyTab} tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> : children}
      </StickyTabsWrapper>
    </ChipTabsWrapper>
  );
};

export const FilteredChipTabs = ({ title, options, ...props }: FilteredChipTabsProps) => {
  return (
    <FilteredChipTabsContainer>
      <ChipTabs {...props}>
        <View>
          <ModalFilter
            title={title}
            options={options}
            initialValue={props.selectedTab.name}
            onSubmit={(name) => props.setSelectedTab(options.find((option) => option.name === name))}
          >
            {(ref) => (
              <StyledTabButton onPress={() => ref.current.present()}>
                <LineFilter size={20} />
              </StyledTabButton>
            )}
          </ModalFilter>
        </View>
      </ChipTabs>
    </FilteredChipTabsContainer>
  );
};

const TextOrIconTab = ({ selectedTab, tab, index, setSelectedTab, ...props }: TextOrIconTabProps) => {
  const TabContent = tab.icon;
  const name = tab.name || tab.label;
  const selected = selectedTab?.label === name || selectedTab?.name === name;
  return (
    <>
      {TabContent ? (
        <StyledTabButton key={index} selected={selectedTab.icon === tab.icon} onPress={() => setSelectedTab(tab)} disabled={tab.disabled} {...props}>
          <StyledTabWithIcon selected={selectedTab.icon === tab.icon}>
            <Text>{tab.icon}</Text>
            <StyledTabText selected={selectedTab.icon === tab.icon}>{tab.count}</StyledTabText>
          </StyledTabWithIcon>
        </StyledTabButton>
      ) : (
        <StyledTabButton key={index} selected={selected} onPress={() => setSelectedTab(tab)} disabled={tab.disabled} {...props}>
          <StyledTabText selected={selected}>{tab.label}{tab.count && ` ${tab.count}`}</StyledTabText>
        </StyledTabButton>
      )}
    </>
  );
};

export default ChipTabs;
