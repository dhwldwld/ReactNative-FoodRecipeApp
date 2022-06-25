import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

import { CategoryCard, TrendingCard } from '../components';

const Home = ({ navigation }) => {
    const [dummyData, setDummyData] = React.useState({
        categories: [
            {
                id: 0,
                name: 'Plant 1',
                image: images.plant1,
                duration: '30 mins',
                serving: 1,
            },
            {
                id: 1,
                name: 'Plant 2',
                image: images.plant2,
                duration: '10 mins',
                serving: 10,
            },
            {
                id: 2,
                name: 'Plant 3',
                image: images.plant3,
                duration: '50 mins',
                serving: 1,
            },
            {
                id: 3,
                name: 'Plant 4',
                image: images.plant4,
                duration: '1 hours',
                serving: 10,
            },
        ],
        trendingRecipes: [
            {
                id: 0,
                name: 'Burger & Photato',
                image: images.trend_recipe1,
                category: 'fast food',
                isBookmark: true,
                duration: '10 mins',
                serving: 12,
                author: {
                    name: 'profile name',
                    profilePic: images.profile1,
                },
                viewers: [
                    {
                        profilePic: images.profile2,
                    },
                    {
                        profilePic: images.profile3,
                    },
                    {
                        profilePic: images.profile4,
                    },
                    {
                        profilePic: images.profile5,
                    },
                    {
                        profilePic: images.profile6,
                    },
                ],
                ingredients: [
                    {
                        id: 0,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 1,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 2,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 3,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 4,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 5,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 6,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 7,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 8,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                ],
            },
            {
                id: 1,
                name: 'Editorial cake',
                image: images.trend_recipe2,
                category: 'dessert',
                isBookmark: false,
                duration: '2 hours',
                serving: 10,
                author: {
                    name: 'profile name',
                    profilePic: images.profile1,
                },
                viewers: [
                    {
                        profilePic: images.profile2,
                    },
                    {
                        profilePic: images.profile3,
                    },
                    {
                        profilePic: images.profile4,
                    },
                    {
                        profilePic: images.profile5,
                    }
                ],
                ingredients: [
                    {
                        id: 0,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 1,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 2,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 3,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 4,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 5,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 6,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 7,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 8,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                ],
            },
            {
                id: 2,
                name: 'salmon',
                image: images.trend_recipe3,
                category: 'fish',
                isBookmark: false,
                duration: '1 hours',
                serving: 5,
                author: {
                    name: 'profile name',
                    profilePic: images.profile1,
                },
                viewers: [
                ],
                ingredients: [
                    {
                        id: 0,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 1,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 2,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 3,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 4,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 5,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 6,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 7,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 8,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                ],
            },
            {
                id: 3,
                name: 'toast',
                image: images.trend_recipe4,
                category: 'toast',
                isBookmark: true,
                duration: '30 mins',
                serving: 12,
                author: {
                    name: 'profile name',
                    profilePic: images.profile1,
                },
                viewers: [
                    {
                        profilePic: images.profile2,
                    },
                    {
                        profilePic: images.profile3,
                    },
                    {
                        profilePic: images.profile4,
                    },
                    {
                        profilePic: images.profile5,
                    },
                ],
                ingredients: [
                    {
                        id: 0,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 1,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 2,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 3,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 4,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 5,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 6,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                    {
                        id: 7,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '2tbsp',
                    },
                    {
                        id: 8,
                        icon: 'fast-food-outline',
                        description: 'fast food',
                        quantity: '100g',
                    },
                ],
            },
        ],
    });
    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80,
                }}>
                {/* Text */}
                <View
                    style={{
                        flex: 1,
                    }}>
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            ...FONTS.h2,
                        }}>
                        Hello ByProgrammers,
                    </Text>
                    <Text
                        style={{
                            marginTop: 3,
                            color: COLORS.gray,
                            ...FONTS.body3,
                        }}>
                        What you want to cook today?
                    </Text>
                </View>

                {/* Image */}
                <TouchableOpacity onPress={() => console.log('Profile')}>
                    <Image
                        source={images.profile1}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    };
    const renderSearchBar = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray,
                }}>
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray,
                    }}
                />
                <TextInput
                    style={{
                        marginLeft: SIZES.radius,

                        ...FONTS.body3,
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder='Search Recipes'
                />
            </View>
        );
    };
    const renderSeeRecipeCard = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen,
                }}>
                {/* Image */}
                <View
                    style={{
                        width: 100,
                        paddingVertical: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        source={images.recipe}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10,
                        }}
                    />
                </View>

                {/* Text */}
                <View
                    style={{
                        flex: 1,
                        paddingVertical: SIZES.radius,
                    }}>
                    <Text
                        style={{
                            width: '70%',
                            ...FONTS.body4,
                        }}>
                        You have 12 recipes that you haven't tried yet
                    </Text>

                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                        }}
                        onPress={() => console.log('See recipes')}>
                        <Text
                            style={{
                                color: COLORS.darkGreen,
                                textDecorationLine: 'underline',
                                ...FONTS.h4,
                            }}>
                            See Recipes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const renderTrendingSection = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                }}>
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2,
                    }}>
                    Trending Recipe
                </Text>

                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 0,
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate('Recipe', { recipe: item })}
                            />
                        );
                    }}
                />
            </View>
        );
    };
    const renderCategoryHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: SIZES.padding,
                }}>
                {/* Section Title */}
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2,
                    }}>
                    Categories
                </Text>

                {/* View All */}
                <TouchableOpacity>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4,
                        }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            <FlatList
                data={dummyData.categories}
                keyExtractor={(item) => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        {/* Search Bar */}
                        {renderSearchBar()}
                        {/* See Recipe Card */}
                        {renderSeeRecipeCard()}
                        {/* Trending Section */}
                        {renderTrendingSection()}
                        {/* Category Header */}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding,
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate('Recipe', { recipe: item })}
                        />
                    );
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 100,
                        }}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default Home;
