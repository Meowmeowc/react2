import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(1);
	const handleInc = () => {
		setCounter(counter * 2);
	};
	const handleDec = () => {
		if (counter <= 0) {
			setCounter(0)
		} else {
			setCounter(counter / 4);
		}
	};
	const handleSbros = () => {
		setCounter(1);
	};
	return (

		<div div className="App" >

			<div className="container">
				<div className="row justify-content-center" >
					<div className="col-12 col-md-6">
						<div className="bg-ligt text-center p-2 display-6 mb-2">
							Pro <b> Counter</b>
						</div>
						<div className="display-1 text-center my-5 py-5">
							{counter}
							<div className="row">
								<div className="col">
									<button className="btn btn-primaty w-100" onClick={handleInc}>
										Увеличение
									</button>
								</div>
								<div className="col">
									<button className="btn btn-succes w-100" onClick={handleDec}>
										Уменьшить
									</button>
								</div>
								<div className="col">
									<button className="btn btn-outline-danger w-100" onClick={handleSbros}>
										Сбросить
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>


		</div >
	);
}

export default App;
