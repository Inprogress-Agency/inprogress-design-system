import { useEffect } from 'react'
import i18n from '../Translations'
import { useSelector } from 'react-redux'

const Translations = () => {
  const { lang } = useSelector(state => state.language)
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])
  return null
}

export default Translations
