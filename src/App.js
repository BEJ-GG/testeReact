import {Switch, Route} from 'react-router-dom'
// import FormDiagnosticoUsuario from './componentes/formDiagnosticoUsuario/FormDiagnosticoUsuario'
// import FormTratamento from './componentes/formtratamento/FormTratamento'
// import ListaExercicio from './componentes/listaexercicio/ListaExercicio'
import ListaUsuario from './componentes/listaUsuario/ListaUsuario'
import FormUsuario from './componentes/formusuario/FormUsuario'
import FormInsertUsuario from './componentes/formusuario/FormInsertUsuario'
// import ListaDiagnostico from './componentes/listadiagnostico/ListaDiagnostico'
// import ListaDiagnosticoUsuario from './componentes/listaDiagnosticoUsuario/ListaDiagnosticoUsuario'
// import ListaTratamento from './componentes/listatratamento/ListaTratamento'

export default function App() {

   return(

      <Switch>
            {/* <Route path="/" component={ListaExercicio}/> */}
            {/* <Route path="/" component={ListaDiagnostico}/> */}
            {/* <Route path="/" component={ListaTratamento}/>
            <Route path="/incluir" component={FormTratamento}/> */}
            <Route path="/" exact component={ListaUsuario}/>
            {/* <Route path="/incluir" component={FormUsuario}/> */}
            <Route path="/editar/:id" component={FormUsuario}/>
            <Route path="/inserir" component={FormInsertUsuario}/>
            {/* <Route path="/" component={ListaDiagnosticoUsuario}/>
            <Route path="/" component={FormDiagnosticoUsuario}/> */}

      </Switch>
)}