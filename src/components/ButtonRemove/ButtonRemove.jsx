import { ReactComponent as Remove } from '../../assets/remove.svg'
import { ContainerButton } from './style'

export function ButtonRemove(){
  return(
    <ContainerButton>
      <button>
        <Remove width={24} stroke="#FF497D" />
      </button>
    </ContainerButton>
  )
}