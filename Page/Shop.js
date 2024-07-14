import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, } from "react-native";
import { useFonts } from "expo-font";

const { width } = Dimensions.get("window");

const Shop = () => {
  const [fontsLoaded] = useFonts({
    "Metro-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metro-Thin": require("../assets/fonts/Metropolis-Thin.otf"),
    "Metro-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metro-Semibold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metro-Black": require("../assets/fonts/Metropolis-Black.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "orange" }}>
      <View style={{ padding: 16 }}>
        {/* Header*/}
        <View style={{ position: "relative", marginBottom: 20,marginTop: 40 }}>
          <Image source={require("../assets/product/header.jpg")} style={{ width: "100%", height: 200, borderRadius: 10, resizeMode: "cover",borderRadius: 10 , borderColor: "black", borderWidth: 2 }} />
          <Text style={{ position: "absolute", bottom: 10, left: 10, color: "black", fontSize: 24, fontFamily: "Metro-Bold" }}>
            Formula 1 Collection
          </Text>
        </View>

        {/*Sale*/}
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <Text style={{ fontSize: 24, fontFamily: "Metro-Bold" }}>Sale</Text>
            <View style={{ borderBottomWidth: 2, borderBottomColor: "black", flex: 1 , marginLeft:10, marginRight:10}} />
            <TouchableOpacity>
              <Text style={{ color: "red", fontFamily: "Metro-Medium" }}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: "Metro-Thin", marginBottom: 10 }}>Super summer sale</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard image={require("../assets/product/sale1.jpg")} name="Teamwear Hybrid" oldPrice={2130000} newPrice={1499000} />
            <ProductCard image={require("../assets/product/sale2.jpg")} name="Teamwear Hooded" oldPrice={2023000} newPrice={1299000} />
            <ProductCard image={require("../assets/product/sale3.jpg")} name="Teamwear Longline" oldPrice={2499000} newPrice={1990000} />
            <ProductCard image={require("../assets/product/sale4.jpg")} name="Teamwear T-Shirt" oldPrice={800000} newPrice={680000} />
            <ProductCard image={require("../assets/product/sale5.jpg")} name="Junior Teamwear Hooded" oldPrice={999999} newPrice={799000} />
            <ProductCard image={require("../assets/product/sale6.jpg")} name="AERO-Active" oldPrice={2769000} newPrice={2290000} />

          </ScrollView>
        </View>

        {/*New*/}
        <View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <Text style={{ fontSize: 24, fontFamily: "Metro-Bold" }}>New</Text>
            <View style={{ borderBottomWidth: 2, borderBottomColor: "black", flex: 1 , marginLeft:10, marginRight:10}} />
            <TouchableOpacity>
              <Text style={{ color: "red", fontFamily: "Metro-Medium" }}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: "Metro-Thin", marginBottom: 10 }}>You've never seen it before!</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            <ProductCardGrid image={require("../assets/product/product1.jpg")} name="Monaco Senna '1' Tee" oldPrice={799000}/>
            <ProductCardGrid image={require("../assets/product/product2.jpg")} name="Monaco Senna Script Hoodie" oldPrice={1385000}/>
            <ProductCardGrid image={require("../assets/product/product3.jpg")} name="Oscar Piastri Australia 9Fifty PC" oldPrice={874000}/>
            <ProductCardGrid image={require("../assets/product/product4.jpg")} name="Monaco Senna Script Hoodie" oldPrice={1385000}/>
            <ProductCardGrid image={require("../assets/product/product5.jpg")} name="Monaco Senna '27' Tee" oldPrice={799000}/>
            <ProductCardGrid image={require("../assets/product/product6.jpg")} name="McLaren Formula 1 Team - 1.80 - World Record Fastest Pit Stop - 2023" oldPrice={554000}/>
            <ProductCardGrid image={require("../assets/product/product7.jpg")} name="Born To Race Hoodie" oldPrice={1385000}/>
            <ProductCardGrid image={require("../assets/product/product8.jpg")} name="Teamwear Polo Shirt" oldPrice={1598000}/>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
};

const ProductCard = ({ image, name, oldPrice, newPrice }) => {
  const discount = oldPrice && newPrice ? `${((oldPrice - newPrice) / oldPrice * 100).toFixed(0)}%` : null;

  return (
    <View style={{ marginRight: 16 }}>
      <Image source={image} style={{ width: 150, height: 200, borderRadius: 10 , borderColor: "black", borderWidth: 2 }} />
      {discount && <Text style={{ position: "absolute", top: 10, left: 10, backgroundColor: "red", color: "white", paddingHorizontal: 5 }}>{discount}</Text>}
      <Text style={{ fontFamily: "Metro-Semibold", marginTop: 10, borderTopWidth: 1, borderTopColor: "black" }}>{name}</Text>
      {oldPrice && <Text style={{ textDecorationLine: "line-through", color: "grey" }}>{formatCurrency(oldPrice)}</Text>}
      {newPrice && <Text style={{ color: "red", fontFamily: "Metro-Bold" }}>{formatCurrency(newPrice)}</Text>}
    </View>
  );
};

const ProductCardGrid = ({ image, name, oldPrice }) => {
  const itemWidth = (width - 48) / 2;

  return (
    <View style={{ width: itemWidth, marginBottom: 16 }}>
      <Image source={image} style={{ width: "100%", height: 200, borderRadius: 10 , borderColor: "black", borderWidth: 2 ,}} />
      <Text style={{ fontFamily: "Metro-Semibold", marginTop: 10 ,borderTopWidth: 2, borderTopColor: "black", }}>{name}</Text>
      {oldPrice && <Text style={{ color: "white", }}>{formatCurrency(oldPrice)}</Text>}
    </View>
  );
};


export default Shop;
