import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Quotes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Loaded <Text style={styles.headerTextBold}>0 Quotes</Text>
        </Text>
      </View>

      <Text style={styles.title}>Daily Quotes</Text>

      <FlatList
        style={styles.quoteList}
        data={[1, 2, 3, 4]}
        keyExtractor={(quote) => String(quote)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.quote}>
            <Text style={styles.quoteTitle}>Best Unicorn</Text>
            <Text style={styles.quoteMsg}>
              In this universe of rainbows, why such a toxic competition between
              us humans if we could just be amazing happy unicorns?
            </Text>
            <Text style={styles.quoteSign}>RainbowCorn :3</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
              <MaterialIcons name='arrow-forward' size={16} color='#785d13' />
              <Text style={styles.detailsButtonText}>
                Click here to see more...
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
