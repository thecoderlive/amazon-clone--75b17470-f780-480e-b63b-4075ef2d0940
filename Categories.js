import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function Categories({ item, navigation }){



function categoriesItem({ item }){
return (
<View style={styles.categories_item}>
<View style={{flexDirection: 'row'}}>
{<View
    style={[styles.electronics,{ backgroundColor: item.electronics ? 'red' : 'black' }]}
   />}
<Text style={styles.electronics1} numberOfLines={1}>{item.electronics1}</Text>
{<View
    style={[styles.clothing,{ backgroundColor: item.clothing ? 'red' : 'black' }]}
   />}
<Text style={styles.clothing2} numberOfLines={1}>{item.clothing2}</Text>
{<View
    style={[styles.homegoods,{ backgroundColor: item.homegoods ? 'red' : 'black' }]}
   />}
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.home_goods} numberOfLines={1}>{item.home_goods}</Text>
{<View
    style={[styles.groceries,{ backgroundColor: item.groceries ? 'red' : 'black' }]}
   />}
<Text style={styles.groceries3} numberOfLines={1}>{item.groceries3}</Text>
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.categories}
    data={item}
    renderItem={categoriesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default Categories;

const styles = StyleSheet.create({
    "electronics": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "electronics1": {
        "flex": 1,
        "color": "#0b0a0a",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "clothing": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "clothing2": {
        "flex": 1,
        "color": "#0e0c0c",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "homegoods": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "home_goods": {
        "flex": 1,
        "color": "#060505",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "groceries": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "groceries3": {
        "flex": 1,
        "color": "#090707",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    }
});