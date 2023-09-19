import { useEffect, useState, useRef } from 'react'
import userDataJson from './data.json'
import * as Styled from './app.style'
import { ENUM_ACTION, ENUM_TYPE } from './enum'

function App() {
  const [selectedGender, setSelectedGender] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [inputKeyword, setInputKeyword] = useState('')
  const [userData, setUserData] = useState(userDataJson)
  const inputRef = useRef()

  const filterButtonList = (type) => {
    const userDataType = userDataJson.map((data) => data[type])
    const userDataWithoutDuplicate = [...new Set(userDataType)]
    return userDataWithoutDuplicate
  }

  const genderButtonList = filterButtonList(ENUM_TYPE.GENDER)
  const countryButtonList = filterButtonList(ENUM_TYPE.COUNTRY)

  const filterDataWithOneCondition = (type, keyword) => {
    return userDataJson.filter((data) => data[type] === keyword)
  }

  const handleSelectButton = (type, selectValue) => {
    if (type === ENUM_TYPE.GENDER) {
      setSelectedGender(selectValue)
    }
    if (type === ENUM_TYPE.COUNTRY) {
      setSelectedCountry(selectValue)
    }
  }

  useEffect(() => {
    let filterData = userData

    if (selectedGender && selectedCountry) {
      filterData = userDataJson.filter((data) => data.country === selectedCountry && data.gender === selectedGender)
    }
    if (selectedGender && selectedCountry === '') {
      filterData = filterDataWithOneCondition(ENUM_TYPE.GENDER, selectedGender)
    }
    if (selectedCountry && selectedGender === '') {
      filterData = filterDataWithOneCondition(ENUM_TYPE.COUNTRY, selectedCountry)
    }

    setUserData(filterData)
  }, [selectedGender, selectedCountry])

  const initialDefault = () => {
    setUserData(userDataJson)
    setSelectedGender('')
    setSelectedCountry('')
  }

  const clearInputValue = () => {
    inputRef.current.value = ''
    setInputKeyword('')
    initialDefault()
  }

  const handleChangeInput = (event) => {
    initialDefault()
    const userInputValue = event.target.value
    setInputKeyword(userInputValue)
  }

  const filterWithKeyword = () => {
    let filterData = userData.filter((data) => data.first_name.toLocaleLowerCase().search(inputKeyword.toLocaleLowerCase()) != -1 || data.last_name.toLocaleLowerCase().search(inputKeyword.toLocaleLowerCase()) != -1)
    setUserData(filterData)
  }

  useEffect(() => {
    filterWithKeyword()
  }, [inputKeyword])

  return (
    <Styled.Container>
      <Styled.Navbutton>
        {genderButtonList.length &&
          genderButtonList.map((gender, i) => (
            <Styled.Button key={i} onClick={() => handleSelectButton(ENUM_TYPE.GENDER, gender)} isActive={gender === selectedGender && ENUM_ACTION.ACTIVE}>
              {gender}
            </Styled.Button>
          ))}
      </Styled.Navbutton>

      <Styled.Navbutton>
        {countryButtonList.length &&
          countryButtonList.map((country, i) => (
            <Styled.Button key={i} onClick={() => handleSelectButton(ENUM_TYPE.COUNTRY, country)} isActive={country === selectedCountry && ENUM_ACTION.ACTIVE}>
              {country}
            </Styled.Button>
          ))}
      </Styled.Navbutton>

      <Styled.SearchBar>
        <input ref={inputRef} type="text" placeholder="search" onChange={(e) => handleChangeInput(e)} />
        <a onClick={() => clearInputValue()}>Clear</a>
      </Styled.SearchBar>

      <Styled.CardList>
        {userData.length &&
          userData.map((data) => (
            <Styled.Card key={data.id}>
              <Styled.CardImage>
                <Styled.Image src={data.image} alt={`image-${data.id}`} />
              </Styled.CardImage>
              <Styled.Name>
                {data.first_name} {data.last_name}
              </Styled.Name>
              <Styled.Descript>{data.gender}</Styled.Descript>
              <Styled.Descript>{data.email}</Styled.Descript>
              <Styled.Descript>{data.country}</Styled.Descript>
            </Styled.Card>
          ))}
      </Styled.CardList>
    </Styled.Container>
  )
}

export default App
