import { ReactComponent as ImgChecked } from '../../assets/checked.svg'
import { ReactComponent as ImgRemove } from '../../assets/remove.svg'
import { ReactComponent as ImgUnchecked } from '../../assets/unchecked.svg'

import { ContainerCard, Rows, ContainerButton } from './style';


export function CardTasks({ Name, Status, CheckedTask, RemoveTask}) {

   return (

      <ContainerCard  status={Status}>
         <Rows >
            <ContainerButton>
               <button onClick={CheckedTask}>
                  {!Status && <ImgChecked width={24} stroke="#4e5b4c"  />}
                  {Status && <ImgUnchecked width={22} />}
               </button>
            </ContainerButton>

            <h3>{Name}</h3>
         </Rows>

         <ContainerButton>
            <button onClick={RemoveTask}>
               <ImgRemove width={24} stroke="#FF497D" />
            </button>
         </ContainerButton>

      </ContainerCard>
   )
}