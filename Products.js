import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function Products({ item, navigation }){



function productsItem({ item }){
return (
<View style={styles.products_item}>
<Image
    style={styles.product_image}
    source={{uri: item.product_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.product_name} numberOfLines={1}>{item.product_name}</Text>
<Text style={styles.product_price} numberOfLines={1}>{item.product_price}</Text>
{<View
    style={[styles.add_to_cart,{ backgroundColor: item.add_to_cart ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.add_to_wishlist,{ backgroundColor: item.add_to_wishlist ? 'red' : 'black' }]}
   />}
</View>
</View>
)}

return (
<FlatList
    style={styles.products}
    data={item}
    renderItem={productsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Products;

const styles = StyleSheet.create({
    "product_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "product_name": {
        "flex": 1,
        "color": "#050505",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "product_price": {
        "flex": 1,
        "color": "#060505",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "add_to_cart": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "add_to_wishlist": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    }
});