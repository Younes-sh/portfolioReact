import Header from '../../Components/Header/Header';
import './home.css'
const Home = () => {
    let infoPersonal = [
        {name:'Younes' , job:'Developer',description:`i'm Fullstack developer`},
    ]
    return (
        <div  className='Home'>
            <div className='container-Home'>
                <Header name={infoPersonal[0].name} job={infoPersonal[0].job}  description={infoPersonal[0].description} />
                {/*  */}
               
      
                {/*  */}

                {/*  */}

                {/*  */}

                {/*  */}
            </div>
            
        </div>
    )
}


export default  Home ;