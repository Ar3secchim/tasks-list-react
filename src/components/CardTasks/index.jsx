import { ReactComponent as ImgChecked } from '../../assets/checked.svg'
import { ReactComponent as ImgRemove } from '../../assets/remove.svg'
import { ReactComponent as ImgUnchecked } from '../../assets/unchecked.svg'


export function CardTasks({ Name, Status, CheckedTask, RemoveTask}) {

   return (

      <div id="card" className={`flex justify-between itens-center px-2 py-4 bg-white rounded-xl ${Status === true ? " border-2 border-green-500" :"" } drop-shadow`} status={toString(Status)}>
         <div className="flex gap-4 items-center">
            <div>
               <button className="flex" onClick={CheckedTask}>
                  {!Status && <ImgChecked width={24} stroke="#4e5b4c"  />}
                  {Status && <ImgUnchecked width={22} />}
               </button>
            </div>

            <h3 className="text-lg">{Name}</h3>
         </div>

         <div>
            <button className="flex justify-center" onClick={RemoveTask}>
               <ImgRemove id="imgremove" width={24} stroke="#FF497D" />
            </button>
         </div>

      </div>
   )
}