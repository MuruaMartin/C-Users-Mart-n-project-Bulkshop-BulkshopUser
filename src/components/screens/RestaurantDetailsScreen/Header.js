import { View, Text, Image } from 'react-native';
import styles from './styles';

const DEFAULT_IMAGE = 
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"


const RestaurantHeader =({restaurant}) => {
    return(
        <View style={styles.page}>           
            <Image 
                source={{
                 uri: restaurant.image.startsWith('http')
                 ? restaurant.image 
                 : DEFAULT_IMAGE,
                }}
                style={styles.image} 
            />

            <View style={styles.container}> 
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    Costo de envío $ {restaurant.deliveryFee.toFixed(0)} &#8226; {restaurant.minDeliveryTime}-
                    {restaurant.maxDeliveryTime} minutos
                </Text>

                <Text style={styles.menuTitle}>Productos</Text>
            </View>           
        </View>
    );
};

export default RestaurantHeader;