import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { api } from '../../services/api';
import { CardPoke } from '../../components/CardPoke';
import { Footer } from './components/Footer';
import { changeUrl, selectUrl } from '../../redux/pokeUrlSlice';

import { Container } from '../../styles/theme';
import { Wrapper } from './styles';


export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const { url } = useSelector(selectUrl);
  const [nextPokemons, setNextPokemons] = useState(null);
  const [previousPokemons, setPreviousPokemons] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    const pokemon = async () => {
      const { status, data } = await api.get(url);

      if (status === 200) {
        if (data) {
          setNextPokemons(data.next);
          setPreviousPokemons(data.previous);
          setPokemons(data.results);
        }
      } else {
        alert("Erro ao carregar os Pokémons")
      }
    }
    pokemon()
  }, [])

  const handleNextPokemons = async () => {
    const arrStringUrl = nextPokemons.split("/")
    const findUrl = arrStringUrl[arrStringUrl.length - 1]
    dispatch(changeUrl(findUrl))

    const { status, data } = await api.get(findUrl);

    if (status === 200) {
      if (data) {
        setNextPokemons(data.next);
        setPreviousPokemons(data.previous);
        setPokemons(data.results);
      }
    } else {
      alert("Erro ao carregar os Pokémons")
    }
  }

  const handlePreviousPokemons = async () => {
    const arrStringUrl = previousPokemons.split("/")
    const findUrl = arrStringUrl[arrStringUrl.length - 1]
    dispatch(changeUrl(findUrl))

    const { status, data } = await api.get(findUrl);

    if (status === 200) {
      if (data) {
        setNextPokemons(data.next);
        setPreviousPokemons(data.previous);
        setPokemons(data.results);
      }
    } else {
      alert("Erro ao carregar os Pokémons")
    }
  }

  return (
    <Container>
      <Wrapper>
        {pokemons.length > 0 ? (
          pokemons.map((item, index) =>
            <CardPoke name={item.name} key={index} />
          )
        ) : null}
      </Wrapper>
      <Footer
        onClickBack={() => handlePreviousPokemons()}
        onClickNext={() => handleNextPokemons()}
        showButtonBack={previousPokemons}
        showButtonNext={nextPokemons}
      />
    </Container>
  )
}