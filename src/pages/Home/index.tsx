import * as S from './styles'
import { MagnifyingGlass } from 'phosphor-react'

import logo from '../../../public/logo.svg'
import hero from '../../assets/images/hero.png'

import { Heading } from '@/components/Heading'
import { Select } from '@/components/Select'
import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'

const options = ['GO', 'MT', 'MS']

export function Home() {
  // function handleSearchPets() {
  //   // TO DO
  // }

  // function handleChangeState() {
  //   // TO DO
  // }

  // function handleChangeCity() {
  //   // TO DO
  // }

  return (
    <S.Wrapper>
      <S.TextContent>
        <img
          src={logo}
          alt="Logo branca redonda imitando o rosto de um cahorro e ao lado direito escrito em branco Find a Friend"
        />

        <Heading size="huge">Leve a felicidade para o seu lar</Heading>

        <Heading>
          Encontre o animal de estimação ideal para seu estilo de vida!
        </Heading>
      </S.TextContent>

      <S.ImageContent>
        <img src={hero} alt="Ilustração com 6 cachorros" />

        <form>
          <Select
            label="Busque um amigo:"
            ariaLabel="Selecione o Estado"
            options={options}
            sideLabel
          />
          <TextField />
          <Button icon={<MagnifyingGlass weight="bold" />} />
        </form>
      </S.ImageContent>
    </S.Wrapper>
  )
}
