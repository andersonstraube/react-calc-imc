import { Level } from '../../helpers/Imc';
import styles from './GridItem.module.css';

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    Entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]} kg/m2</strong>
                </>
            </div>
        </div>
    );
}