class myArray{
    constructor(){
        Object.defineProperty(this,"length",{
           value:0,
           writable:true,
           enumerable:false
        });
      
          this.length = arguments.length;//automatically increasing the no. of parametrs of arr as data increases in it.
      
          for(let i=0; i< this.length; i++)
          {
              this[i] = arguments[i];
          }
    }
    enter(value){   //push
      let index = this.length;
      this[index] = value;
      this.length++;

    }
    exit(){   //pop
      let index = this.length-1;
      delete this[index];
      this.length--; 
    }
    goLast(){   //top
        let index = this.length-1;
        return this[index]; 
    }
    show(){   //print
       console.log(Object.values(this));
    }
    showReverse(){  //printReverse
        let index = this.length;
        let bag=[];
        let j=0;
        for(let i=index-1;i>=0; i--)
        {
                bag[j]=this[i];
                j++;        
        }
        return(bag);
    }
    scaleLength(){   //size
        let index = this.length;
        return index;
    }


}
 
  
  let a2 = new myArray("x","y","z");
  console.log("a2:",Object.values(a2));

  a2.enter(3);
  a2.enter(8);
  a2.enter(10);
  console.log("a2:",Object.values(a2));

  a2.exit();
  console.log("a2:",Object.values(a2));

  console.log(a2.goLast());

  a2.show();
  
  console.log(a2.showReverse());

  console.log(a2.scaleLength())

  


  
