import { ReactComponent as ImgChecked } from '../../assets/checked.svg'
import { ReactComponent as ImgRemove } from '../../assets/remove.svg'
import { ReactComponent as ImgUnchecked } from '../../assets/unchecked.svg'

import { ContainerCard, Rows, ContainerButton } from './style';


export function CardTasks({ Name, Checked, CheckedTask, RemoveTask}) {

   return (

      <ContainerCard  checked={Checked}>
         <Rows >
            <ContainerButton>
               <button onClick={CheckedTask}>
                  {!Checked && <ImgChecked width={24} stroke="#4C535B" />}
                  {Checked && <ImgUnchecked width={22} />}
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