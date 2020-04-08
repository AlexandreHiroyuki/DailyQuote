import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Quotes() {
  const [quotes, setQuotes] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function navigateToDetail(quote) {
    navigation.navigate('Detail', { quote, page })
  }

  async function loadQuotes() {
    if (loading) {
      return
    }

    if (total > 0 && quotes.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get('/quotes', {
      params: {
        page: page,
      },
    })

    setQuotes([...quotes, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadQuotes()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Loaded <Text style={styles.headerTextBold}>{total} Quotes</Text>
        </Text>
      </View>

      <Text style={styles.title}>Daily Quotes</Text>

      <FlatList
        style={styles.quoteList}
        data={quotes}
        keyExtractor={(quote) => String(quote.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadQuotes}
        onEndReachedThreshold={0.2}
        renderItem={({ item: quote }) => (
          <View style={styles.quote}>
            <Text style={styles.quoteTitle}>{quote.title}</Text>
            <Text style={styles.quoteMsg}>{quote.msg}</Text>
            <Text style={styles.quoteSign}>{quote.user_sign}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(quote)}
            >
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
