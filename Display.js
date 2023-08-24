class Display 
{
    constructor(displayValorAnterior, displayValorAtual) 
    {
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.Operadores = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.signos = {
            Somar: '+',
            Dividir: '/',
            Multiplicar: '*',
            Subtrair: '-', 
        }
    }

    //Apaga somente um número por vez
    Apagar() 
    {
        this.valorAtual = this.valorAtual.toString().slice(0,-1);
        this.imprimirValores();
    }

    //Apaga todos os numeros
    ApagaTudo() 
    {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.Operadores = undefined;
        this.imprimirValores();
    }

    computar(tipo) 
    {
        this.Operadores !== 'igual' && this.calcular();
        this.Operadores = tipo;
        this.valorAnterior = this.valorAtual || this.valorAnterior;
        this.valorAtual = '';
        this.imprimirValores();
    }

    AddNumeros(numero) 
    {
        if(numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() 
    {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.Operadores] || ''}`;
    }

    calcular() 
    {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);

        if( isNaN(valorAtual)  || isNaN(valorAnterior) ) return
        this.valorAtual = this.calculador[this.Operadores](valorAnterior, valorAtual);
    }
}