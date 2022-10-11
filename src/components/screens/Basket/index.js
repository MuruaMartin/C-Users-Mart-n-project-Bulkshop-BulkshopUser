import {View, Text, StyleSheet, FlatList} from 'react-native';
import BasketDishItem from '../../BasketDishItem';

import restaurants from "../../../../assets/data/restaurants.json";

const restaurant = restaurants[0];


const Basket = () => {
    return (
        <View style={styles.page}>
         <Text style={styles.name}>{restaurant.name}</Text>

            <Text style={styles.yourItem}>Tu pedido</Text>

            <FlatList 
            data={restaurant.dishes} 
            renderItem={({ item }) => <BasketDishItem basketDish ={item} />} 
            />

         <View style={styles.separator} />

         <View style={styles.button}>
            <Text style={styles.buttonText}>Crear pedido</Text>    
         </View>


        </View>
      );
    };

const styles = StyleSheet.create({
    page:{
        flex: 1, 
        width:"100%",
        paddingVertical: 40, // temp fix
        padding: 10,
    },
    name:{
        fontSize: 26,
        fontWeight: "600",
        marginVertical: 10,
    },
    yourItem:{
        fontWeight: 'bold',
        marginTop: 20, 
        fontSize: 19, 
    },
    description: {
        color: "gray",

    },
    separator:{
        height:1,
        backgroundColor: "Lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    quantity:{
        fontSize: 25,
        marginHorizontal: 20,
    },
    button:{
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
    },
    buttonText:{
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    nameItem:{
        fontWeight: "600",
    },
    value:{
        marginLeft: "auto",

    },
    quantityContainer:{
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
});

export default Basket;