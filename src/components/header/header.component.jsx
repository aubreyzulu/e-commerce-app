import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.ultis'
import { ReactComponent as Logo } from '../../assets/crown.svg.svg'
import CartIcon from '../cart-icon/cart.icon.component';
import CartDropdown from '../cart-dropdown/cart.dropdown.component'

import './header.style.scss';



const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link to='/signin'>SIGN IN</Link>
            }

            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}

    </div>
)


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return {
        currentUser,
        hidden
    }
}

export default connect(mapStateToProps, null)(Header);