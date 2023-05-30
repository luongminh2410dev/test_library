import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';

const CollapseView = forwardRef((props, ref) => {
    const { children, style } = props;
    const [isCollapse, setCollapse] = useState(true);

    useImperativeHandle(ref, () => ({
        toggle: (value) => setCollapse(value),
        show: () => {
            setCollapse(false);
        },
        hidden: () => {
            setCollapse(true)
        }
    }))

    return (
        <Collapsible
            style={[styles.collapse_view, style]}
            collapsed={isCollapse}>
            {children}
        </Collapsible>
    )
})

export default CollapseView

const styles = StyleSheet.create({
    collapse_view: {
        width: '100%',
        paddingTop: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 12,
    },
})