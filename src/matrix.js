import React, {Component} from 'react';
import './matrix.css';

class Matrix extends Component{

    state = {
        clrarr : []
    };
    
    x =0;
    timer= null;
    startGame = () => {

           this.timer = setInterval( () => {
                
                if(this.state.clrarr.length=== this.props.matrixval * this.props.matrixval){
                    alert("You Lost")
                console.log("lost");
                clearInterval(this.timer);
                return
                
            }
            var cord = this.getUncoloredBox(this.state.clrarr)
            console.log("cord" , cord);
            var randomx = cord.x;
            var randomy = cord.y;
        
    
       this.state.clrarr.push({x:randomx,y:randomy});
            this.setState({
                clrarr : this.state.clrarr
            })
        } ,(this.props.secondsval)*1000)

    }

    

    unColor = (isColored, item,item1) => {
       this.x++;

        console.log("got you");
        for(var i=0; i<this.state.clrarr.length; i++){
            if(this.state.clrarr[i].x=== item && this.state.clrarr[i].y=== item1){
                console.log("if");
                this.state.clrarr.splice(i,1);
                this.setState({
                    clrarr : this.state.clrarr
                })
                
                break;
            }
        };
        if (this.x===1){
        this.startGame();}

        if(this.state.clrarr.length === 0){
            alert("You won");
            clearInterval(this.timer);
        }
    }

    

    render(){
        console.log("hi");
        var matrix = this.props.matrixval;
//         var seconds = this.props.secondsval;
//         var box = this.props.boxval;
       
        
        // pushing matrix values to array to define the return of "div" which will create our grid.
        // creating array beacuse we need to perform loop in JSX, and map is required tp perform loop
        var matrixarr = []
        for(var i=0 ; i<matrix ; i++)
        {
            matrixarr.push(i)
        }
        console.log( "a",this.state.clrarr)

       

        return(
            <div>
                {matrixarr.map(item => {
                    
                    return <div 
                        
                    className="matrix1" key ={item}>
                        {matrixarr.map((item1) =>{
                            var isColored =false;
                            for (var i=0; i<this.state.clrarr.length; i++){
                                if(item ===this.state.clrarr[i].x && item1 ===this.state.clrarr[i].y ){
                                    isColored = true;
                                    break;
                                }

                            }
                            return <div 
                            onClick = {() => this.unColor(isColored ,item,item1)}
                            className={"matrix2 " + (isColored?"clr":'')} key ={item1} style={{width : (100/matrix)+"%"}}>
                            
                            </div> 
                        }) }

                     </div>
                   

                })}
            </div>
        );
    };

    //this will give us unique value everytime which keeps on check that box should get colored 
    getUncoloredBox = (clrarr) => {
        console.log("qqq" , clrarr)
        var isUncolored = true;
        var matrixval = this.props.matrixval;
        while(isUncolored){
            console.log("in while");
            var randomx= Math.floor( Math.random() * (matrixval));
            var randomy= Math.floor( Math.random() * (matrixval));
            var isRandomColored = false;

            for(var i=0; i<clrarr.length ; i++){
                if (randomx=== clrarr[i].x && randomy=== clrarr[i].y ) 
                {
                    isRandomColored = true;
                    break;
                }
            }

            if(!isRandomColored){
            var cord = {}
            cord.x = randomx;
            cord.y = randomy;
            return cord;}
        }
    }



    //used lifecycle here because we want random number to generate at once which will color the boxes at first

    componentDidMount(){
        console.log("hello");
        
        //clr arr is defined which will take boxes value as object like (0,1) (1,0) etc..
        var clrarr = [];
        for(var j=0;j<this.props.boxval; j++)
        {
            var cord = this.getUncoloredBox(clrarr);
            var randomx = cord.x;
            var randomy = cord.y;
        
    
       clrarr.push({x:randomx,y:randomy});
       
            
        };

        //here setting state again so that values go back to render
        this.setState({
            clrarr : clrarr
        })
    }
   
    
};

export default Matrix;
