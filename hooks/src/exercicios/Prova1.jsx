import React, { useEffect } from 'react'

function Prova1() {

	/*
		Aqui faco a inicializacao das variaveis e uso localStorage para buscar preco e descontos salvos no localStorage
	*/
    const [preco, setPreco] = React.useState(() => window.localStorage.getItem('preco') ?? 0)
    const [desconto, setDesconto] = React.useState(() => window.localStorage.getItem('desconto') ?? 0)
	const [precoComDesconto, setPrecoComDesconto] = React.useState(0)
	const [classe, setClasse] = React.useState("")

	// Aqui faco a mudanca dos inputs desestruturei o event.taget para pegar as variaveis name e value para fazer os if e saber qual input estava sendo modificado corretamente, sem fazer isso estava dando um erro quando modificava 1 modificava os dois com o mesmo valor
    const inputChange = (event) => {
		const { name, value } = event.target
		if (name == 'preco') {
		  setPreco(value)
		  
		} else if (name == 'desconto') {
		  setDesconto(value)
		  
		}
	  }


	  /*
	  	Aqui faco o use effect para fazer todas as atualizacoes necessarias quando os valores de preco e desconto sao modificados. Ele deve fazer a operacao de calcular desconto
		e calcular a classe do desconto alem tambem de fazer todas as operacoes necessarias para salvar as variaveis no localStorage
	  */
	useEffect(() => {
		setPrecoComDesconto(calcularDesconto())
		setClasse(calcularClasse())
		window.localStorage.setItem('preco', preco)
		window.localStorage.setItem('desconto', desconto)
	}, [preco, desconto])
	// aqui é a funcao de calcular desconto ela retorna o preco final ja com o desconto
	const calcularDesconto = () => {
		const valorDesconto = (preco * desconto) / 100
		const precoFinal = preco - valorDesconto
		return precoFinal
	}
	// aqui faz o calculo da classe conforme requisitado na prova
	const calcularClasse = () => {
		if (desconto == 0){
			return
		}

		if (desconto <= 15) {
			return "Desconto negocial"
		} else if (desconto > 15 && desconto <= 50) {
			return "Desconto promocional"
		}
		else if (desconto > 50) {
			return "Desconto de liquidação"
		}
	}

	/*
		Tive que acrecentar value nos inputs porque eles nao estavam em branco sempre que recarregava a pagina
	*/
	return (<main>
		<h1>Cálculo de descontos</h1>

		<div id="container">
			<div className="input-set">
				<label>
					<span>Preço cheio</span><br />
					<input name="preco" type="number" value={preco} onChange={inputChange} />
				</label>
			</div>

			<div className="input-set">
				<label>
					<span>Desconto (%)</span><br />
					<input name="desconto" type="number" value={desconto} onChange={inputChange}/>
				</label>
			</div>

			<div className="result">
				<div>Preço com desconto: {precoComDesconto} </div>
				<div>Classe: {classe}</div>
			</div>
		</div>
	</main>)
}

export default Prova1


