import { View, Text, StyleSheet, FlatList } from "react-native";

import OrderListItem from "../../OrderListItem";
import orders from "../../../../assets/data/orders.json";

const OrderScreen = () => {
    return (
        <View style={styles.row}>
            <FlatList 
            data = {orders} 
            renderItem={({ item }) => <OrderListItem order={item} />} 
            />
        </View>
    );
};

const styles = StyleSheet.create({

    row:{
        flex: 1, 
        width: '100%',


    },
});

export default OrderScreen;