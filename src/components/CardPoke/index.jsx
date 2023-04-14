import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changePoke } from '../../redux/pokeSlice';
import { api } from '../../services/api';

import * as S from './styles';

export function CardPoke({ name }) {
  const [urlImage, setUrlImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataPoke, setDataPoke] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true)
    const requestData = async () => {
      const { status, data } = await api.get(name);
      if (status === 200) {
        if (data) {
          const sprite = data.sprites.front_default;
          setUrlImage(sprite)
          setDataPoke(data)
        } else {
          alert("Erro ao carregar Pokémon")
        }
        setLoading(false)
      } else {
        alert("Erro ao carregar o Pokémon")
        setLoading(false)
      }
    }
    requestData();
  }, [name])

  const handleDetailPokemon = () => {
    dispatch(changePoke(dataPoke))
    navigate("/pokemon")
  }

  return (
    <S.Wrapper>
      {!loading ? (
        <>
          <img src={urlImage} />
          <button onClick={handleDetailPokemon}>{name.charAt(0).toUpperCase() + name.slice(1)}</button>
        </>
      ) : <p>Carregando...</p>}
    </S.Wrapper>
  )
}