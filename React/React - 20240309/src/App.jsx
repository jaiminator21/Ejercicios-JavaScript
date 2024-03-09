import "./App.css"
import Cabecera from "./assets/components/layout/Cabecera"
import Despido from "./assets/components/layout/Despido"
import ListaExperiencia from "./assets/components/layout/ListaExperiencia"
import ListaVoluntarios from "./assets/components/layout/ListaVoluntarios"
import TitleSection from "./assets/components/layout/ListaGamePrograms"
import Armario from "./assets/components/pages/Armario"
import Contador from "./assets/components/pages/Contador"
import ListaGamePrograms from "./assets/components/layout/ListaGamePrograms"
import Usuario from "./assets/components/layout/Usuario"
import Portrait from "./assets/components/layout/Portrait"
import ListaAboutMe from "./assets/components/layout/ListaAboutMe"


 

function App() {

  const experienciasArr = [
    {empresa:'Cocacola', cargo:'Directivo', fecha: '2000-2005'},
    {empresa:'Colacao', cargo:'Project Manager', fecha: '2006-2010'}
  ]


  const programasArr = [
    {name:'UE5', value:'80'},
    {name:'Unity', value:'80'},
    {name:'HTML', value:'50'},
    {name:'CSS', value:'100'},
    {name:'Figma', value:'90'},
    {name:'JS', value:'70'},
    {name:'NodeJS', value:'70'},
    {name:'React', value:'70'}
  
  ]

  const voluntariadosArr = [
    {lugar:'Parroqia San Manuel Gonzalez', fecha:'01/05/2019', descrip: 'Cocinar en un comedor social'},
    {lugar:'Editor de video', fecha:'febrero - marzo 2015', descrip: 'Editar videos para servidores de RP'}
  ]

  const aboutMeArr = [
    {text:'me gustan los coches'},
    {text:'me gusta el'}
  ]



  const aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac viverra dolor. Praesent dui purus, eleifend sit amet neque vel, luctus egestas arcu. Donec condimentum, mi vitae lobortis semper, velit magna varius urna, vel varius risus tortor vitae mi. Integer tempor libero in ligula malesuada finibus. Nunc vitae dolor nec turpis laoreet ornare et sit amet diam. Sed consectetur vitae tellus posuere auctor. Aliquam quis massa vel est condimentum faucibus eu nec ipsum. Vivamus dignissim finibus justo, ultrices molestie nunc pharetra eget. Etiam sem justo, porttitor quis posuere aliquam, suscipit eget lorem. Ut at sagittis lectus. Morbi ut vulputate magna. Maecenas pulvinar eu nisl id blandit. Mauris tristique rhoncus libero, aliquam sollicitudin ipsum sollicitudin ac. Donec vestibulum accumsan erat, sit amet vestibulum nisi malesuada sed. Donec semper turpis at elit tempor efficitur. Suspendisse finibus sollicitudin pretium. Duis mollis libero ut risus blandit, nec convallis sapien volutpat. Proin ac efficitur mauris. Sed gravida fermentum leo nec rhoncus. Ut pellentesque placerat imperdiet. Ut efficitur pharetra justo, vitae lobortis nulla imperdiet quis. Maecenas eu aliquam est. Cras tincidunt sem sed lacinia tincidunt. Nulla sapien ante, consectetur sit amet metus sit amet, semper dignissim tortor. Nam consequat pretium risus et lobortis. Nulla in vulputate mauris. Donec eget tempor sapien. Integer tempus massa dui, non elementum orci condimentum at. Nam in massa tortor. Fusce quis eleifend mauris. Sed sed hendrerit purus. Nunc pulvinar elit et dolor sodales convallis. Nulla scelerisque mauris diam, finibus pulvinar purus feugiat imperdiet. Fusce nunc augue, tempus ut turpis sit amet, viverra condimentum quam. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus.'


  return (
    <>
      <div className="title"><h1>CURRICULUM VITAE</h1></div>
      <div className="container-profile">
      <Portrait img = {'/src/assets/img/camiseta3.jpg'}/>
      <Usuario name = {'Jaime Sebastián'}  profesion = {'Fullstack Developer & Game designer'} />
      </div>
      <div className="title"><h3>SOBRE MÍ</h3></div>
      <ListaAboutMe text ={aboutMe}/>
      <div className="title"><h3>TRABAJOS Y OTRAS EXPERIENCIAS</h3></div>
      <div className = "container-row">
        <ListaExperiencia trabajo = {experienciasArr} />
        <ListaVoluntarios  voluntariados = {voluntariadosArr}/>
      </div>
      <div className="title"><h3>HABILIDADES</h3></div>
      <div className="title"><h3>PROGRAMAS</h3></div> 
     
      <ListaGamePrograms progra = {programasArr}/>
      
  {/*    <Armario/> */}

    {/*   <Despido text = {despedida}/> */}
    </>
  );
}

export default App;
