// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size{
    constructor (width=80 ,height=60){
        this._width = width;
        this._height = height;

    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    
    resize(newWidth, newHeight){
        this._width = newWidth;
        this._height = newHeight; 
        
    }
}
export class Position {
    constructor (x=0 ,y=0){
        this._x = x;
        this._y = y;

    }
    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }
    
    move(newX, newY){
        this._x = newX;
        this._y = newY; 
        
    }
}
export class ProgramWindow {
    constructor(){
        this._screenSize =  new Size(800,600);
        this._size = new Size();
        this._position = new Position();
    }
    get screenSize(){
        return this._screenSize;
    }
    get size(){
        return this._size;
    }
    get position(){
        return this._position;
    }
    resize (newSize){
        if(newSize.width>1 || newSize.height>1){
            const resultSize = new Size(this.screenSize.width - this.position.x,this.screenSize.height - this.position.y )
                this.size.resize((resultSize.width>=newSize.width)
                ?newSize.width:resultSize.width,
                (resultSize.height>=newSize.height)
                ?newSize.height:resultSize.height);
        }else{
            this.size.resize(1, 1);
        }
        
    }

    move (newPosition){
        let x = 0;
        let y = 0
        let resultX = (this._size.width + newPosition.x) - this._screenSize.width;
        let resultY = (this._size.height + newPosition.y) - this._screenSize.height;
        if(newPosition.x>0) x = (resultX>0)?this._screenSize._width - this._size.width: newPosition.x;
        if(newPosition.y>0) y = (resultY>0)?this._screenSize._height - this._size.width: newPosition.y;
        this.position.move(x,y);
    }   
}
export function changeWindow (newProgramWindow){
    newProgramWindow.resize(new Size(400,300));
    newProgramWindow.move(new Position(100, 150));
    return newProgramWindow; 
}

