import React from 'react';
import './style.css';
import Photo from '../assets/images/mainphoto.png';
import Salsa from '../assets/images/salsa.png';
import Salad from '../assets/images/salad.png';
import Lemon from '../assets/images/lemoncake.jpeg';
import Dummy from '../assets/images/dummy.jpeg';

function Main() {
    return (
        <>
            <main className='full-width main-sec'>
                <div className='full-width banner'>
                    <article className='inner-width main-con'>
                        <h1 className='little-lemon'>Little Lemon</h1>
                        <h3 className='chica'>Chicago</h3>
                        <p className='paragra'>we are family owned</p>
                        <p className='paragra'>Mediterranean restaurant</p>
                        <p className='paragra'>focused on traditional</p>
                        <p className='paragra'>recepies served with a modern</p>
                        <p className='paragra'>twist</p>
                        <button type='submit' className="button-col">Reserve a Table</button>
                        <img src={Photo} alt='' className='img-main' />
                    </article>
                </div>
                <article className='full-width'>
                    <section className='inner-width special-week' >
                        <div className='special'>
                            <h1 className='h-tag'>This Weeks Specials!</h1>
                            <button type='submit' className='button-tag '>Online Menu</button>
                        </div>
                        <div className='online-menu'>
                            <div className='online'>
                                <figure className='menu-img'>
                                    <img src={Salsa} alt='' className='salad-img' />
                                </figure>
                                <div className='menu-name'><p>Bruchetta  <span>$6.95</span> </p></div>
                                <p>
                                    Greek salad recipe is our new favorite summer side dish!
                                   Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.</p>

                                <button>order a delivery</button>
                            </div>
                            <div className='online'>
                                <figure className='menu-img'>
                                    <img src={Salad} alt='' className='salad-img' />
                                </figure>
                                <div className='menu-name'><p>Greek Salad  <span>$5.95</span> </p></div>
                                <p className='menu-item'>
                                    Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.
                                </p>
                                <button>order a delivery</button>
                            </div>
                            <div className='online'>
                                <figure className='menu-img'>
                                    <img src={Lemon} alt='' className='lemon-img' />
                                </figure>
                                <div className='menu-name'><p>Lemon Cake  <span>$10</span> </p></div>
                                <p>
                                    Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.
                                </p>
                                <button className='order-button'>order a delivery</button>
                            </div>
                        </div>
                    </section>
                </article>
                <h1 className='test'>Testimonial</h1>
                <section className='full-width'>
                    <div className='inner-width test-box '>
                        <div className='box'>
                            <img src={Dummy} className='dummy-img' alt=''/>
                            <p>Review</p>
                           <p>The food was fantastic,and service was steller
                            </p>
                        </div>
                        <div className='box'>
                        <img src={Dummy} className='dummy-img' alt=''/>
                        <p>Review</p>
                            <p>The food was fantastic,and service was steller </p>
                        </div>
                        <div className='box'>
                        <img src={Dummy} className='dummy-img' alt=''/>
                        <p>Review</p>
                            <p>he food was fantastic,and service was steller
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            <hr />
        </>
    )
}
export default Main;