import React from 'react';
import styles from './Cart.module.css';
import {data} from './data.jsx'

let totalPrice = 0
const final = data.map(item => 
  totalPrice = totalPrice + item.price*item.quantity
  )
const listItem = data.map(item =>
  <div className={styles.productContainer} data-count="0" data-price="3999" key={item.id}>
    <img className={styles.imgContainer} src={item.img} />
    <div className={styles.productInfo}>
      <div className={styles.productInfoWrapper}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.price}>${item.price}</div>
      </div>
      

      <div className={styles.productControlContainer}>
        <img className={styles.productActionMinus} src='../public/icons/minus.svg'/>
        <span className={styles.productCount}>{item.quantity}</span>
        <img className={styles.productActionPlus} src='../public/icons/plus.svg'/>
      </div>
      
    </div>
  </div>
)



function Cart(){
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price="0">
        {listItem}
      </section>

    <section className={styles.cartShippingInfo}>
      <div className={styles.text}>運費</div>
      <div className={styles.totalPrice}>免費</div>
    </section>
    <section className={styles.cartTotalInfo}>
      <div className={styles.text}>小計</div>
      <div className={styles.totalPrice}>${totalPrice}</div>
    </section>
      
  </section>   
  )
}

export default Cart
