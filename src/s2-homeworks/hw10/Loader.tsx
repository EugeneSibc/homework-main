import s from './Loader.module.css'
import spiner from './Spinner@1x-1.0s-200px-200px.svg'

export const Loader = () => (
    <div className={s.loader}>
         <img src={spiner} />
    </div>
)
