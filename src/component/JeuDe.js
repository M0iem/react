import { Component } from "react";
class JeuDe extends Component{
    constructor(props){
        super(props);
        this.state = {face:null, compteur:0, end:false}
    }
   jouer = () =>{
        let faceval = Math.floor(Math.random()*6+1);
        if (faceval == this.props.cache)
        this.setState({end:true})
        this.setState({face:faceval, compteur:this.state.compteur+1 })
    }
   init = () =>{
    this.setState({face:null, compteur:0, end:false}) 
   }
    render(){
        
        return(
            <div className="m-5 y-4 JeuDe">
                <h1 className="text-danger">La face cache est : <img src="img/face2.png" />
                <hr /> </h1>
                
                <img src={  
                    this.state.face==null
                    ?"img/init.png"
                    :`img/face${this.state.face}.png`  } />
                <h1 ><i> Jeu de Diamono</i></h1>
                <p>Face : {this.state.face}</p>
                <p>Nombre d'e ssais :{this.state.compteur}</p>
                {
                    this.state.end
                    ?
                    <div>
                        <p className="text-success">
                            Bravo !! Vous avez trouvez face cache :) 
                        </p>
                    <button className="btn btn-success" onClick={this.init}> New Game </button>
                    </div>
                    :
                    <button className="btn  btn-dark text-danger" onClick={this.jouer}> 
                    Play 
                     </button>
                }
            </div>
        )
    }
}
export default JeuDe;