import React, {useState} from 'react';
import styles from '../../styles/Product.module.css'
const SIZES=[4,4.5,5]

const Product = ({title,price,images,description}) => {
    const currentImage=images[0];
    const [currentSize,setCurrentSize]=useState();

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current}
                style={{backgroundImage:`url(${currentImage})`}}
                />

                    <div
                        className={styles.image}
                         style={{backgroundImage:`url(${images})`}}
                        onClick={()=>{}}
                    />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>{price}</div>
                <div className={styles.color}>
                    <span>Color:</span>Green
                </div>
                <div className={styles.sizes}>
                    <span>Sizes:</span>
                    <div className={styles.list}>
                        {SIZES.map((size) => (
                            <div
                                onClick={() => setCurrentSize(size)}
                                className={`${styles.size} ${
                                    currentSize === size ? styles.active : ""
                                }`}
                                key={size}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.actions}>
                    <button className={styles.add}>Add to card</button>
                    <button className={styles.favourite}>Add to favorites</button>
                </div>
                <div className={styles.bottom}>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Product;