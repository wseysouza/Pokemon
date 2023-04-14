import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectPoke } from '../../redux/pokeSlice';
import { ButtonHome } from '../../components/ButtonHome';
import { Loading } from '../../components/Loading';

import { Container, WrapperImage, WrapperText, Row, Title, Description, RowDesc } from './styles';

export function DetailsPokemon() {
  const { detailsPokemon } = useSelector(selectPoke);
  const [loading, setLoading] = useState(true)
  const image = detailsPokemon.sprites.other.home.front_default;
  setTimeout(() => {
    setLoading(false)
  }, 500);
  const arrayInfos = [
    'Nome',
    'Tipo',
    'Habilidades',
    'Estatísticas'
  ];
  const detailItem = (item) => {
    switch (item) {
      case 'Tipo':
        return detailsPokemon.types;

      case 'Habilidades':
        return detailsPokemon.abilities;

      case 'Estatísticas':
        return detailsPokemon.stats;

      default:
        break;
    }
  }
  const descriptionItem = (item, element) => {
    switch (item) {
      case 'Tipo':
        return element.type.name;
      case 'Habilidades':
        return element.ability.name;
      case 'Estatísticas':
        return element.stat.name;
      default:
        break;
    }
  }
  return (
    <Container>
      <ButtonHome />
      {!loading ? (
        <>
          <WrapperImage src={image} />
          <WrapperText>
            {arrayInfos.map((item) =>
              <Row>
                <Title>{item}:</Title>
                {item === 'Nome' ? (
                  <Description>
                    {
                      detailsPokemon.name.charAt(0).toUpperCase() + detailsPokemon.name.slice(1)
                    }
                  </Description>
                ) : (
                  <RowDesc>
                    {detailItem(item).map((element, index) =>
                      <Description>
                        {`${descriptionItem(item, element)}${(detailItem(item).length - 1) !== index ? ',' : '.'}`}
                      </Description>
                    )}
                  </RowDesc>
                )}

              </Row>
            )}
          </WrapperText>
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </Container >
  )
}
