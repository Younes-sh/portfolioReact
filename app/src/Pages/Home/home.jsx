import Header from '../../Components/Header/Header'
const Home = () => {
    let infoPersonal = [
        {name:'Younes' , job:'Developer',description:'im Fullstack developer'},
    ]
    return (
        <>
            <h1>Home page</h1>
            <Header name={infoPersonal[0].name} job={infoPersonal[0].job}  description={infoPersonal[0].description} />
            {/*  */}
            
            {/*  */}
            
            {/*  */}
            
            {/*  */}
            
            {/*  */}
            
        </>
    )
}


export default  Home ;