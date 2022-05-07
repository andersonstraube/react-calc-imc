import { useState } from 'react';
import styles from './App.module.css';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';
import { levels, calculateImc, Level } from './helpers/Imc';

const App = () => {
  const [ heightField, setHeightField ] = useState<number>(0);
  const [ weightField, setWeightField ] = useState<number>(0);
  const [ toShow, setToShow ] = useState<Level | null>(null);

  const handleCalculaButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Informe sua altura e peso.");
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
       <header>
        <div className={styles.headerContainer}>
        <h1>Calcule o Índice de Massa Corporal (IMC)</h1>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <input
            type="number"
            placeholder="Seu peso (em kg). Ex: 73.5"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
           <input
            type="number"
            placeholder="Altura (em metros). Ex: 1.5"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculaButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>            
          }
        </div>
      </div>
    </div>
  );
}

export default App;