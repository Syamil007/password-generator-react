

export class Password_handle{

    static get_lower(){
        let lower = String.fromCharCode(Math.floor(Math.random()*26)+ 97);
        return lower;
    }

    static get_upper(){
        let upper = String.fromCharCode(Math.floor(Math.random()*26)+ 65);
        return upper;
    }

    static get_number(){
        let number = String.fromCharCode(Math.floor(Math.random()*10)+ 48);
        return number;
    }

    static get_symbol(){
         let symbols = '!@#$%^&*()_+[]<>{};,./?"';
         let symbol = symbols[Math.floor(Math.random()*symbols.length)];
        return symbol;
    }

    static getpasswordObject(state){
        let objectPassword = {};
        for (let key of Object.keys(state)){
            if(typeof state[key] === 'boolean' && state[key]){
                objectPassword = {...objectPassword,
                    [key] : state[key]
                } 
            }
        }
        return objectPassword;
    }

    static generatePass(objectPasswordd , passwordlength){
        let finalPass = '';
        
        for(let i=0; i< Number(passwordlength); i+= Object.keys(objectPasswordd).length){
           
            if(objectPasswordd.lower){ finalPass += `${this.get_lower()}`;}
            
            if(objectPasswordd.upper){ finalPass += `${this.get_upper()}`;}
               
            if(objectPasswordd.numbers){ finalPass += `${this.get_number()}`;}
            
            if(objectPasswordd.symbols){ finalPass += `${this.get_symbol()}`;}
            

        }

        return finalPass.substring(0,Number(passwordlength));
    }

}

