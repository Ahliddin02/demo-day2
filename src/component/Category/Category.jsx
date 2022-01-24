import React from 'react'
import { Link } from 'react-router-dom'


function Category() {
    return (
        <div>
             <div class="categories">
                      <div class="category-names">
                         <h2 className="mmm">Категории</h2>
                         <ul>
                           <li><Link to='/shirt'><a class="novinki" >Мужская рубашка</a></Link></li>
                           <li><Link to='/sneakers'><a href="#">Мужские кроссовки</a></Link></li>
                           <li><Link to='/sundress'><a href="#">Сарафан</a></Link></li>
                           <li><Link to='/ankle-boots'><a href="#">Ботильоны</a></Link></li>
                           <li><Link to='/down-jacket'><a href="#">Пуховик детский</a></Link></li>
                           <li><Link to='/childrens-shirt'><a href="#">Детский футболка</a></Link></li>
                           <li><a href="#">Джемпер</a></li>
                           <li><a href="#">Джинси</a></li>
                           <li><a href="#">Бриджи</a></li>
                           <li><a href="#">Классические брюки</a></li>
                           <li><a href="#">Полушубок</a></li>
                           <li><a href="#">Спортивный костюм</a></li>
                           <li><a href="#">Дерби</a></li>
                           <li><a href="#">Биркенштоки </a></li>
                           <li><a href="#">Футболки</a></li>
                         </ul>
                      </div>
                    </div>
        </div>
    )
}
export default Category
