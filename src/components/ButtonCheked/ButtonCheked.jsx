import { ReactComponent as Checked } from '../../assets/checked.svg'
import { ContainerButton } from './style'

export function ButtonCheked (){

  return(
    <ContainerButton>
      <button>
        <Checked width={24} stroke="#4C535B" />
      </button>
    </ContainerButton>
  )
}