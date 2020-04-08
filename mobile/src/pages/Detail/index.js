import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native'

import api from '../../services/api'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Detail() {
  const [quotes, setQuotes] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  const quote = route.params.quote

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

  function navigateBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <MaterialIcons name='arrow-back' size={28} color='#785d13' />
        </TouchableOpacity>
      </View>

      <View style={[styles.quote, { marginTop: 16 }]}>
        <Text style={styles.quoteTitle}>{quote.title}</Text>
        <Text style={styles.quoteMsg}>{quote.msg}</Text>
        <Text style={styles.quoteSign}>
          {quote.user_sign} - {quote.greet}
        </Text>
      </View>

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
