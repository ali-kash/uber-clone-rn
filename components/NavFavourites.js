import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'

const data = [
	{
		id: '123',
		icon: 'home',
		location: 'Home',
		destination: 'Yaletown, Vancouver, BC, Canada',
	},
	{
		id: '456',
		icon: 'briefcase',
		location: 'Office',
		destination: '63 W 6TH AVENUE, Vancouver, BC, Canada',
	},
	{
		id: '789',
		icon: 'medkit-outline',
		location: 'Doctor',
		destination: '899 W 12th Avenue, Vancouver, BC, Canada',
	},
]

const NavFavourites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-200`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity style={tw`flex-row items-center p-5`}>
					<Icon
						style={tw`mr-4 rounded-full bg-gray-300 p-3`}
						name={icon}
						type='ionicon'
						color='white'
						size={18}
					/>
					<View>
						<Text style={tw`font-semibold`}>{location}</Text>
						<Text style={tw`text-gray-500`}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	)
}

export default NavFavourites

const styles = StyleSheet.create({})
