import React from 'react'
import { ChevronDownIcon, CheckIcon, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

const DropDown = ({items, isHovered, style, placeholder, onValueChange, selectedValue, isInvalid}) => {

  return (
    <Select 
        isHovered={isHovered} 
        style={style} 
        onValueChange={onValueChange}
        selectedValue={selectedValue} 
        isInvalid={isInvalid}
    >
        <SelectTrigger variant="outline" size="sm">
            <SelectInput placeholder={placeholder} />
            <SelectIcon mr='$3'>
                <Icon as={ChevronDownIcon} />
            </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
                <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {items.map((item) => (
                    <SelectItem 
                        key={item.value} 
                        label={item.label} 
                        value={item.value}
                        style={{backgroundColor: selectedValue === item.value && '#02B7D7' }}
                    />
                ))}
            </SelectContent>
        </SelectPortal>
    </Select>
  )
}

export default DropDown

const styles = StyleSheet.create({
    display: {
        backfaceVisibility: 'hidden',
        display: 'none'
    }
})
