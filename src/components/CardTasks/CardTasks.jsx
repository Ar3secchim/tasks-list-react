import { ContainerCard, Rows } from './style';
import { ButtonCheked } from '../ButtonCheked/ButtonCheked';
import { ButtonRemove } from '../ButtonRemove/ButtonRemove';

// import { ReactComponent as Remove } from '../assets/remove.svg'

export function CardTasks() {

   return (
      <ContainerCard>
         <Rows>
            <ButtonCheked />
            <h3>Taks</h3>
         </Rows>

         <ButtonRemove />

      </ContainerCard>
   )
}