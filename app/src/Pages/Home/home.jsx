import Header from '../../Components/Header/Header';
import './home.css'
import  Slide  from '../../Components/Slide-show/Slide';
const Home = () => {
    let infoPersonal = [
        {name:'Younes' , job:'Developer',description:`i'm Fullstack developer`},
    ]
    return (
        <div  className='Home'>
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