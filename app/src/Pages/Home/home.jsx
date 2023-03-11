import {i18n} from 'i18n-js';
import Header from '../../Components/Header/Header';
import './home.css'
import  Slide  from '../../Components/Slide-show/Slide';

import SelectLanguage from '../../Components/Language/SelectLanguage'
const Home = () => {
    
    let infoPersonal = [
        {name:'Younes' , job:'Developer',description:`i'm Fullstack developer`},
    ]
    return (
        <div  className='Home'>
            <SelectLanguage>
                {/* <h1>{i18n.t('welcome')}</h1> */}
            </SelectLanguage>
            <div className='container-Home'>
                <Header name={infoPersonal[0].name} job={infoPersonal[0].job}  description={infoPersonal[0].description} />
                {/*  */}
                <div className='container-experience'>
                  
                </div>
            
            </div>
            <Slide className='Slide'/>
            
        </div>
    )
}


export default  Home ;